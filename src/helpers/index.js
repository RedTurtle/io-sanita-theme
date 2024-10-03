export { getSiteProperty } from 'io-sanita-theme/helpers/config';
export {
  viewDate,
  getRealStartAndEndWithRecurrence,
  getCalendarDate,
  getEventRecurrenceMore,
} from 'io-sanita-theme/helpers/dates';
export EnhanceLink from 'io-sanita-theme/helpers/Link/EnhanceLink';
export SearchUtils from 'io-sanita-theme/helpers/search';
export {
  removeListingVariation,
  addSchemaStyles,
  DEFAULT_BG_COLORS,
  cloneBlock,
} from 'io-sanita-theme/helpers/Blocks/blocks_config';
export {
  handleKeyDownOwnFocusManagement,
  useHandleDetachedBlockFocus,
} from 'io-sanita-theme/helpers/Blocks/focus';
export { commonSearchBlockMessages } from 'io-sanita-theme/helpers/Translations/searchBlockExtendedTranslations';
export {
  videoUrlHelper,
  checkIfValidVideoLink,
} from 'io-sanita-theme/helpers/video';
export { useDebouncedEffect } from 'io-sanita-theme/helpers/debounce';

//pagination
export { useClientPagination } from 'io-sanita-theme/helpers/ClientPagination/clientPagination';

//file
export {
  getFileViewFormat,
  FILE_EXTENSIONS,
  FILE_FORMATS,
} from 'io-sanita-theme/helpers/Files/files';

export FileIcon from 'io-sanita-theme/helpers/Files/FileIcon';
export DownloadFileFormat from 'io-sanita-theme/helpers/Files/DownloadFileFormat';

export {
  blocksFieldIsEmpty,
  getRealEmptyField,
} from 'io-sanita-theme/helpers/FormValidation/FormValidation';

//richtext
export RichText from 'io-sanita-theme/helpers/RichText/RichText';
export RichTextRender from 'io-sanita-theme/helpers/RichText/RichTextRender';
export RichTextSection from 'io-sanita-theme/helpers/RichText/RichTextSection';
export { richTextHasContent } from 'io-sanita-theme/helpers/RichText/richTextUtils';

//blocks
export RenderBlocks from 'io-sanita-theme/helpers/Blocks/RenderBlocks';
export TextOrBlocks from 'io-sanita-theme/helpers/Blocks/TextOrBlocks';

//views
export ContentTypeViewSections from 'io-sanita-theme/helpers/Views/ContentTypeViewSections';
export { contentFolderHasItems } from 'io-sanita-theme/helpers/Views/content';
export { useReadingTime } from 'io-sanita-theme/helpers/Views/readingTime';
export PuntoDiContattoValue from 'io-sanita-theme/helpers/Views/PuntoDiContattoValue';

//address and maps
export Address from 'io-sanita-theme/helpers/Address/Address';
export { mapPinDirections } from 'io-sanita-theme/helpers/Address/mapPin';

//item
export {
  getItemIcon,
  getItemListingCategory,
  hasGeolocation,
} from 'io-sanita-theme/helpers/Item/item';

//registry
export { getComponentWithFallback } from 'io-sanita-theme/helpers/registry';
