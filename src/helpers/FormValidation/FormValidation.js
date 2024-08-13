import { isEmpty, filter } from 'lodash';
import { defineMessages } from 'react-intl';

const customValidationMessages = defineMessages({
  event_end: {
    id: 'event_end',
    defaultMessage:
      'La data di fine deve essere successiva alla data di inizio',
  },
});

export const blocksFieldIsEmpty = (field) => {
  return (
    filter(field?.blocks, (block) => {
      if (block?.['@type'] === 'slate') {
        return !!block?.plaintext?.trim()?.length;
      }
      if (block?.['@type'] === 'text') {
        return !!block?.text?.blocks?.filter((block) => !!block.text.trim())
          ?.length;
      }
      if (block?.['@type'] === 'table') {
        return (
          // se non ci sono righe che hanno almeno una cella che contenga testo
          !!block?.table?.rows?.filter(
            (row) =>
              row?.cells?.filter(
                (cell) =>
                  cell?.value?.blocks?.filter((block) => !!block?.text?.trim())
                    ?.length > 0,
              )?.length > 0,
          )?.length
        );
      }
      return false;
    })?.length === 0
  );
};

const removeRequiredField = (fields, fieldId) =>
  fields?.splice(
    fields?.findIndex((f) => f === fieldId),
    1,
  );

const fieldIsRequired = (fields, fieldId) => fields?.some((f) => f === fieldId);

/**
 * Get if field is really empty or not.
 * Fixes ObjectBrowser bug not updating formData in realtime
 * and breaking validation next. We fixed validation not being called
 * onBlur bug, but the sum of bugs makes a feature and without
 * this fix, validation is broken for all ObjectBrowser fields
 * @param {object} formData formData values
 * @param {object} touchedField contains info on touched fields
 * @param {string} field required field reference to update
 * @param {string} type field type
 * @param {string} widget widget type
 */
export const getRealEmptyField = (
  formData,
  touchedField,
  field,
  type,
  widget,
) => {
  if (type === 'array' && widget !== 'data_grid') {
    if (field in touchedField) {
      // Fixes ObjectBrowser Volto bug: not updating formData in realtime
      formData[field] = touchedField[field];
    }
    return isEmpty(formData[field]);
  } else if (type === 'dict' && widget === 'blocks') {
    const firstBlock = formData?.[field]?.blocks_layout?.items?.[0];
    return (
      // se non ci sono blocchi (improbabile)
      firstBlock === undefined ||
      // se non c'è alcun blocco di testo o tabella che contenga testo
      blocksFieldIsEmpty(formData[field])
    );
  } else if (type === 'string' && widget === 'richtext') {
    return !(formData?.[field]?.data?.replace(/(<([^>]+)>)/g, '').length > 0);
  } else if (type === 'integer') {
    return formData?.[field] === null || formData?.[field] === undefined;
  } else {
    return isEmpty(formData[field]);
  }
};


/**
 * Validates form of Event CT
 * @param {object} schema schema
 * @param {object} formData formData values
 * @param {object} touchedField contains info on touched fields
 * @param {Array} fields required fields reference to update
 * @param {object} errors errors reference to update
 */
export const eventFormValidationHelper = (
  schema,
  formData,
  touchedField,
  fields,
  errors,
  formatMessage,
) => {
  if (schema.title !== 'Evento') return;

  if ('end' in touchedField && !isEmpty(formData.start)) {
    if (new Date(touchedField.end) < new Date(formData.start)) {
      errors['end'] = [];
      errors['end'].push(formatMessage(customValidationMessages.event_end));
    }
  } else {
    // check del form data
    if (new Date(formData.end) < new Date(formData.start)) {
      errors['end'] = [];
      errors['end'].push(formatMessage(customValidationMessages.event_end));
    }
  }

};
