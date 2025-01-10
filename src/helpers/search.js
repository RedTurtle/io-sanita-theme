import mapValues from 'lodash/mapValues';
import moment from 'moment';
import qs from 'query-string';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
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

// A section is checked if is in value
const isSectionChecked = (s, value) => {
  return value.indexOf(s['@id']) > -1;
};

// A group is checked if at least one filter is checked
const isGroupChecked = (group, value) => {
  return (
    isSectionChecked(group, value) ||
    (group.items || []).reduce(
      (checked, item) => checked || isSectionChecked(item, value),
      false,
    )
  );
};

// A group is indeterminate if at least one of its filters is checked, but not all of them
const isGroupIndeterminate = (group, groupIsChecked, value) =>
  groupIsChecked &&
  group.items.reduce(
    (indet, item) => indet || value.indexOf(item['@id']) < 0,
    false,
  );

// Given a filters group, set all filters to the given state
const updateGroupCheckedStatus = (group, checked) =>
  mapValues(group.items, (filter) => ({
    ...filter,
    value: checked,
  }));

const getSections = (fetchedSections, location, subsite) => {
  const pathname = location?.pathname?.length ? location.pathname : '/';
  let items = getItemsByPath(fetchedSections, pathname, !subsite);
  items.map((item) => {
    item['@id'] = flattenToAppURL(item['@id']);
    item.items.map((i) => (i['@id'] = flattenToAppURL(i['@id'])));
  });
  return items;
};

const parseFetchedSections = (sections, location) => {
  const qsSections = qs.parse(location?.search ?? '')['path.query'] ?? [];

  return sections.reduce((acc, sec) => {
    let sectionItems = sec.items ?? [];
    sectionItems.forEach((item) => {
      let sUrl = flattenToAppURL(item['@id']);
      if (qsSections.indexOf(sUrl) > -1) {
        acc.push(sUrl);
      }
    });
    return acc;
  }, []);
};

const parseFilters = (paramName, list, location) => {
  const qs_filters = qs.parse(location?.search ?? '')?.[paramName] ?? [];
  return list
    .filter((el) => qs_filters.indexOf(el.value) > -1)
    .reduce((acc, t) => {
      acc.push(t.value);
      return acc;
    }, []);
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
  parliamo_di = [],
  a_chi_si_rivolge_tassonomia = [],
  options = {},
  portal_types = [],
  sections = [],
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
  const b_size = config.settings.defaultPageSize;
  const b_start = currentPage ? (currentPage - 1) * b_size : 0;

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
  if (sections.length > 0) {
    pathQuery = { 'path.query': sections };
  } else if (customPath?.length > 0) {
    pathQuery = { 'path.query': customPath };
  } else if (baseUrl?.length > 0) {
    pathQuery = {
      'path.query': baseUrl,
    };
  }

  baseUrl += '/search';

  let obj = {
    ...(searchableText ? { SearchableText: searchableText } : {}),
    ...(pathQuery ?? {}),
    parliamo_di,
    a_chi_si_rivolge_tassonomia,
    ...optionsQuery,
    ...(order?.sort_on || order?.sort_order ? order : {}),
  };

  if (getObject) {
    if (portal_types) {
      obj.portal_type = portal_types;
    }
    obj.b_start = b_start;
    obj.b_size = b_size;
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
  parseFilters,
  parseFetchedSections,
  getSearchParamsURL,
  getItemsByPath,
  getSections,
  isSectionChecked,
};

export default SearchUtils;
