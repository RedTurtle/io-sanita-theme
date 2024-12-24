import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Segment, Accordion } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { TextWidget } from '@plone/volto/components/manage/Widgets';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import Icon from '@plone/volto/components/theme/Icon/Icon';

import upSVG from '@plone/volto/icons/up-key.svg';
import downSVG from '@plone/volto/icons/down-key.svg';

import {
  LinkToWidget,
  defaultIconWidgetOptions,
} from 'io-sanita-theme/components/manage/Widgets';
import IconWidget from 'io-sanita-theme/components/manage/Widgets/IconWidget/IconWidget';

import config from '@plone/volto/registry';

const messages = defineMessages({
  linkMoreTitle: {
    id: 'icons_linkMoreTitle',
    defaultMessage: 'Titolo per il link ad altro',
  },
  linkMore: {
    id: 'icons_linkMore',
    defaultMessage: 'Link ad altro',
  },
  backgroundImage: {
    id: 'backgroundImage',
    defaultMessage: 'Immagine di sfondo',
  },

  alignCards: {
    id: 'alignCards',
    defaultMessage: 'Allinea le card al centro',
  },
  bg_color: {
    id: 'bg_color',
    defaultMessage: 'Colore di sfondo',
  },
  color_primary: {
    id: 'color_primary',
    defaultMessage: 'Primario',
  },
  color_secondary: {
    id: 'color_secondary',
    defaultMessage: 'Secondario',
  },
  color_transparent: {
    id: 'color_transparent',
    defaultMessage: 'Trasparente',
  },
});

const Sidebar = ({
  data,
  block,
  onChangeBlock,
  onChangeSubBlock,
  selected = 0,
  setSelected,
  openObjectBrowser,
  blocksConfig,
  navRoot,
  contentType,
  blocksErrors,
}) => {
  const intl = useIntl();

  const schema = blocksConfig[data['@type']].schema({
    intl,
    formData: data,
    onChangeBlock,
    openObjectBrowser,
    block,
  });

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage
            id="icons_blocks"
            defaultMessage="Blocco con icone"
          />
        </h2>
      </header>
      <BlockDataForm
        schema={schema}
        title={schema.title}
        onChangeField={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
        onChangeBlock={onChangeBlock}
        formData={data}
        block={block}
        blocksConfig={blocksConfig}
        navRoot={navRoot}
        contentType={contentType}
        errors={blocksErrors}
      />
      <Accordion fluid styled className="form">
        {data.subblocks &&
          data.subblocks.map((subblock, index) => {
            return (
              <div key={'subblock' + index}>
                <Accordion.Title
                  active={selected === index}
                  index={index}
                  onClick={() => setSelected(selected === index ? null : index)}
                >
                  {subblock.title ?? `Blocco ${index + 1}`}
                  {selected === index ? (
                    <Icon name={upSVG} size="20px" />
                  ) : (
                    <Icon name={downSVG} size="20px" />
                  )}
                </Accordion.Title>
                <Accordion.Content active={selected === index}>
                  <IconWidget
                    id="icon"
                    value={subblock.icon ?? ''}
                    defaultOptions={defaultIconWidgetOptions}
                    onChange={(name, value) => {
                      onChangeSubBlock(index, {
                        ...subblock,
                        [name]: value,
                      });
                    }}
                    wrapped={false}
                  />
                  <TextWidget
                    id="linkMoreTitle"
                    title={intl.formatMessage(messages.linkMoreTitle)}
                    value={subblock.linkMoreTitle}
                    onChange={(name, value) => {
                      onChangeSubBlock(index, {
                        ...subblock,
                        linkMoreTitle: value,
                      });
                    }}
                  />
                  <LinkToWidget
                    data={subblock}
                    openObjectBrowser={openObjectBrowser}
                    title={intl.formatMessage(messages.linkMore)}
                    showTarget={false}
                    onChange={(name, value) =>
                      onChangeSubBlock(index, {
                        ...subblock,
                        [name]: value,
                      })
                    }
                  />
                </Accordion.Content>
              </div>
            );
          })}
      </Accordion>
    </Segment.Group>
  );
};

Sidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  block: PropTypes.string,
  onChangeBlock: PropTypes.func,
  selected: PropTypes.any,
  setSelected: PropTypes.func,
};

export default injectIntl(Sidebar);
