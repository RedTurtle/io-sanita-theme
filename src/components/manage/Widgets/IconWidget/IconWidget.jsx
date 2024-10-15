import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Grid } from 'semantic-ui-react';
import { TextWidget, SelectWidget } from '@plone/volto/components';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { FontAwesomeIcon } from 'io-sanita-theme/components';
import { IconPreviewWidget } from 'io-sanita-theme/components/manage/Widgets';
import FormFieldWrapper from '@plone/volto/components/manage/Widgets/FormFieldWrapper';

import './iconWidget.scss';

const messages = defineMessages({
  icon: {
    id: 'icon',
    defaultMessage: 'Icona',
  },
  description: {
    id: 'iconDescription',
    defaultMessage:
      'Puoi selezionare un’icona fra quelle proposte nel menu a tendina oppure puoi scrivere/incollare nel campo di testo il nome di un’icona di fontawesome 6',
  },
});

const IconWidget = (props) => {
  const { id, value, defaultOptions, onChange, reactSelect } = props;
  const intl = useIntl();
  const [iconString, setIconString] = useState(value);
  const [selectValue, setSelectValue] = useState(value);

  const { Option } = reactSelect.components;
  const CustomSelectOption = (props) => {
    return (
      <Option {...props}>
        {props.data.value !== 'no-value' && (
          <span className="icon-container">
            <FontAwesomeIcon icon={props.data.value} size="1x" />
          </span>
        )}
        <span className="label-container">{props.data.label}</span>
      </Option>
    );
  };

  return (
    <FormFieldWrapper {...props} className="select-icon-widget">
      <div className={'wdg ' + props.wrapped == false ? '' : 'wrapped'}>
        {defaultOptions && defaultOptions.length > 0 && (
          <SelectWidget
            id="selectIcon"
            title={intl.formatMessage(messages.icon)}
            required={false}
            value={selectValue}
            intl={intl}
            onChange={(_id, value) => {
              setSelectValue(value);
              setIconString(value);
              onChange(id, value);
            }}
            choices={defaultOptions}
            customOptionStyling={CustomSelectOption}
          />
        )}
        <TextWidget
          id="textIcon"
          title=""
          value={iconString}
          onChange={(name, value) => {
            setSelectValue(null);
            setIconString(value);
            onChange(id, value);
          }}
          wrapped={false}
        />
        <IconPreviewWidget icon={iconString} wrapped={false} />
      </div>

      <p className="help help-icon-widget">
        {intl.formatMessage(messages.description)}
        <span className="ms-4">
          <a
            target="_blank"
            href="https://fontawesome.com/search?o=r&m=free"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="arrow-right" />
          </a>
        </span>
      </p>
    </FormFieldWrapper>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
IconWidget.propTypes = {
  onChange: PropTypes.func,
};

export default injectLazyLibs('reactSelect')(IconWidget);
