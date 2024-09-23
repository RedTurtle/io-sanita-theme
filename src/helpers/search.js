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

const parseFetchedTopics = (topics, location) => {
  const qsTopics = qs.parse(location?.search ?? '')?.parliamo_di ?? [];

  return topics.reduce((acc, topic) => {
    acc[flattenToAppURL(topic['@id'])] = {
      value: qsTopics.indexOf(topic.title) > -1,
      label: topic.title,
    };

    return acc;
  }, {});
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

const parseFetchedOptions = (options, location) => {
  const qsOptions = qs.parse(location?.search ?? '');
  const opts = JSON.parse(JSON.stringify(options));

  if (
    qsOptions['effective.range'] &&
    qsOptions['effective.range'] === 'min:max'
  ) {
    opts.dateStart = qsOptions['effective.query:list:date'][0] ?? null;
    opts.dateEnd = qsOptions['effective.query:list:date'][1] ?? null;
  } else if (
    qsOptions['effective.range'] &&
    qsOptions['effective.range'] === 'min'
  ) {
    opts.dateStart = qsOptions['effective.query:list:date'] ?? null;
  } else if (
    qsOptions['effective.range'] &&
    qsOptions['effective.range'] === 'max'
  ) {
    opts.dateEnd = qsOptions['effective.query:list:date'] ?? null;
  }

  if (
    qsOptions['expires.range'] &&
    qsOptions['expires.range'] === 'min' &&
    qsOptions['expires.query:list:date']
  ) {
    opts.activeContent = true;
  }

  return opts;
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
  searchableText,
  topics = {},
  options = {},
  portalTypes = {},
  sortOn = {},
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

  const activeTopics = Object.keys(topics).reduce((acc, topic) => {
    if (topics[topic].value) return [...acc, topics[topic].label];
    return acc;
  }, []);

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

  let pathQuery = null;
  if (customPath?.length > 0) {
    pathQuery = { 'path.query': customPath };
  } else if (baseUrl?.length > 0) {
    pathQuery = {
      'path.query': baseUrl,
    };
  }

  const activePortalTypes = Object.keys(portalTypes).reduce((acc, ct) => {
    if (portalTypes[ct].value) return [...acc, ct];
    return acc;
  }, []);
  let portal_type =
    activePortalTypes?.length > 0 ? { portal_type: activePortalTypes } : null;

  let text = searchableText ? { SearchableText: searchableText } : null;

  baseUrl += '/search';

  if (getObject) {
    let obj = {
      ...(text ?? {}),
      ...(pathQuery ?? {}),
      parliamo_di: activeTopics,
      ...optionsQuery,
      ...sortOn,
      ...portal_type,
      skipNull: true,
      b_start: b_start,
      use_site_search_settings: true,
    };

    return obj;
  }

  return (
    baseUrl +
    '?' +
    qs.stringify(
      {
        ...(text ?? {}),
        ...(pathQuery ?? {}),
        parliamo_di: activeTopics,
        ...optionsQuery,
        ...sortOn,
        ...portal_type,
      },
      { skipNull: true },
    ) +
    (b_start > 0 ? `&b_start=${b_start}` : '')
  );
};

const SearchUtils = {
  defaultOptions,
  isGroupChecked,
  isGroupIndeterminate,
  updateGroupCheckedStatus,
  parseFetchedTopics,
  parseFetchedPortalTypes,
  parseFetchedOptions,
  getSearchParamsURL,
  getItemsByPath,
};

export default SearchUtils;
