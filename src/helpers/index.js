export {
  viewDate,
  getRealStartAndEndWithRecurrence,
  getCalendarDate,
  getEventRecurrenceMore,
} from 'io-sanita-theme/helpers/dates';
export SearchUtils from 'io-sanita-theme/helpers/search';
export { getSiteProperty } from 'io-sanita-theme/helpers/config';

export {
  removeListingVariation,
  addSchemaStyles,
  DEFAULT_BG_COLORS,
} from 'io-sanita-theme/helpers/blocks_config';
export { commonSearchBlockMessages } from 'io-sanita-theme/helpers/Translations/searchBlockExtendedTranslations';
export {
  videoUrlHelper,
  checkIfValidVideoLink,
} from 'io-sanita-theme/helpers/video';

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
  serviceFormValidationHelper,
  eventFormValidationHelper,
} from 'io-sanita-theme/helpers/FormValidation/FormValidation';

export {
  CUSTOM_DGFIELD_VALIDATION,
  realWidgetType,
  getSpecificDataGridFieldValidation,
} from 'io-sanita-theme/helpers/FormValidation/DataGrid';

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
export Address from 'io-sanita-theme/helpers/Address/Address';
export PuntoDiContattoValue from 'io-sanita-theme/helpers/Views/PuntoDiContattoValue';

//pagination
export { usePaginatedItemsSection } from 'io-sanita-theme/helpers/usePaginatedItemsSection.hook.ts';

