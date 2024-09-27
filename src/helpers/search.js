import mapValues from 'lodash/mapValues';
import moment from 'moment';
import qs from 'query-string';
import { flattenToAppURL } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

const defaultOptions = {
  activeContent: false,
  dateStart: undefined,
  dateEnd: undefined,
};

export const getItemsByPath = (
  items = [],
  pathname = '/',
  defaultRootPath = true,
) => {
  let rootPathConfig = null;
  const itemsByPath = items?.reduce((acc, val) => {
    if (val.rootPath === '/') {
      rootPathConfig = val;
      return acc;
    }
    return { ...acc, [val.rootPath]: val };
  }, {});
  const matchingPaths = Object.keys(itemsByPath)
    .filter((path) => pathname.startsWith(path))
    .sort((a, b) => {
      if (a.length > b.length) return -1;
      else if (a.length < b.length) return 1;
      else return 0;
    });

  if (matchingPaths.length > 0) return itemsByPath[matchingPaths[0]].items;
  else if (rootPathConfig && defaultRootPath) return rootPathConfig.items;
  else return [];
};

// A group is checked if at least one filter is checked
const isGroupChecked = (group) => {
  return Object.keys(group.items || {}).reduce(
    (checked, filterId) => checked || group.items[filterId].value,
    false,
  );
};

// A group is indeterminate if at least one of its filters is checked, but not all of them
const isGroupIndeterminate = (group, groupIsChecked) =>
  groupIsChecked &&
  Object.keys(group.items).reduce(
    (indet, filterId) => indet || !group.items[filterId].value,
    false,
  );

// Given a filters group, set all filters to the given state
const updateGroupCheckedStatus = (group, checked) =>
  mapValues(group.items, (filter) => ({
    ...filter,
    value: checked,
  }));

const parseFetchedSections = (fetchedSections, location, subsite) => {
  const pathname = location?.pathname?.length ? location.pathname : '/';

  const qsSections = qs.parse(location?.search ?? '')['path.query'] ?? [];

  const sections = getItemsByPath(fetchedSections, pathname, !subsite);

  return Object.keys(sections).reduce((acc, sec) => {
    let id = sections[sec].id;
    let sectionItems = sections[sec].items;
    if (sectionItems) {
      acc[id] = {
        path: flattenToAppURL(sections[sec]['@id']),
        title: sections[sec].title,
        items:
          sectionItems &&
          sectionItems.reduce((itemsAcc, subSec) => {
            let subSectionUrl = flattenToAppURL(subSec['@id']);
            itemsAcc[subSectionUrl] = {
              value: qsSections.indexOf(subSectionUrl) > -1,
              label: subSec.title,
            };

            return itemsAcc;
          }, {}),
      };
    }

    return acc;
  }, {});
};

const parseFetchedTopics = (topics, location) => {
  const qsTopics = qs.parse(location?.search ?? '')?.parliamo_di ?? [];

  return topics
    .filter((topic) => qsTopics.indexOf(topic.value) > -1)
    .reduce((acc, t) => {
      acc.push(t.value);
    }, []);
};
const parseFetchedUsers = (users, location) => {
  const qsTopics =
    qs.parse(location?.search ?? '')?.a_chi_si_rivolge_tassonomia ?? [];

  return users
    .filter((u) => qsTopics.indexOf(u.value) > -1)
    .reduce((acc, uu) => {
      acc.push(uu.value);
    }, []);
};

const parseFetchedPortalTypes = (portalTypes, defaultExcludedCT, location) => {
  const qsCTs = qs.parse(location?.search ?? '')?.['portal_type'] ?? [];

  return portalTypes.reduce((acc, ct) => {
    acc[ct.id] = {
      value: qsCTs.includes(ct.id) || !defaultExcludedCT.includes(ct.id),
      label: ct.label,
      defaultChecked: !defaultExcludedCT.includes(ct.id),
    };

    return acc;
  }, {});
};

// const parseCustomPath = (location) => {
//   const qsOptions = qs.parse(location?.search ?? '');
//   let customPath = null;
//   if (qsOptions['custom_path']) {
//     customPath = qsOptions['custom_path'];
//   }
//   return customPath;
// };

const getSearchParamsURL = ({
  searchableText = '',
  topics = {},
  users = {},
  options = {},
  portal_types = {},
  order = { sort_on: null, sort_order: null },
  currentPage,
  customPath,
  subsite,
  currentLang,
  getObject = false,
}) => {
  let baseUrl = subsite
    ? flattenToAppURL(subsite['@id'])
    : config.settings.isMultilingual
    ? '/' + currentLang
    : '';
  const b_start = currentPage
    ? (currentPage - 1) * config.settings.defaultPageSize
    : 0;

  //options
  const optionsQuery = {};
  if (options.activeContent) {
    optionsQuery['expires.range'] = 'min';
    optionsQuery['expires.query:list:date'] = moment().format('YYYY/MM/DD');
  }
  if (options.dateStart && options.dateEnd) {
    optionsQuery['effective.range'] = 'min:max';
    optionsQuery['effective.query:list:date'] = [
      options.dateStart,
      options.dateEnd,
    ];
  } else if (options.dateStart && !options.dateEnd) {
    optionsQuery['effective.range'] = 'min';
    optionsQuery['effective.query:list:date'] = options.dateStart;
  } else if (!options.dateStart && options.dateEnd) {
    optionsQuery['effective.range'] = 'max';
    optionsQuery['effective.query:list:date'] = options.dateEnd;
  }

  //path
  let pathQuery = null;
  if (customPath?.length > 0) {
    pathQuery = { 'path.query': customPath };
  } else if (baseUrl?.length > 0) {
    pathQuery = {
      'path.query': baseUrl,
    };
  }

  //portal types
  const activePortalTypes = Object.keys(portal_types).reduce((acc, ct) => {
    if (portal_types[ct].value) return [...acc, ct];
    return acc;
  }, []);
  let portal_type =
    activePortalTypes?.length > 0 ? { portal_type: activePortalTypes } : null;

  //searchable text
  let text = searchableText ? { SearchableText: searchableText } : null;
  console.log('text', text);
  baseUrl += '/search';

  let obj = {
    ...(text ?? {}),
    ...(pathQuery ?? {}),
    parliamo_di: topics,
    a_chi_si_rivolge_tassonomia: users,
    ...optionsQuery,
    ...order,
    ...portal_type,
    skipNull: true,
  };

  if (getObject) {
    obj.b_start = b_start;
    obj.use_site_search_settings = true;
    return obj;
  }

  return (
    baseUrl +
    '?' +
    qs.stringify(obj) +
    (b_start > 0 ? `&b_start=${b_start}` : '')
  );
};

const SearchUtils = {
  defaultOptions,
  isGroupChecked,
  isGroupIndeterminate,
  updateGroupCheckedStatus,
  parseFetchedSections,
  parseFetchedTopics,
  parseFetchedPortalTypes,
  getSearchParamsURL,
  getItemsByPath,
  parseFetchedUsers,
};

export default SearchUtils;
