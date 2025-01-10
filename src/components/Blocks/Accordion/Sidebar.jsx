import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import {
  TextWidget /*, CheckboxWidget*/,
} from '@plone/volto/components/manage/Widgets';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import upSVG from '@plone/volto/icons/up-key.svg';
import downSVG from '@plone/volto/icons/down-key.svg';
import { defineMessages, useIntl } from 'react-intl';

import { LinkToWidget } from 'io-sanita-theme/components/manage/Widgets';
const messages = defineMessages({
  linkMoreTitle: {
    id: 'accordion_linkMoreTitle',
    defaultMessage: 'Titolo per il link ad altro',
  },
  linkMore: {
    id: 'accordion_linkMore',
    defaultMessage: 'Link ad altro',
  },
  bg: {
    id: 'accordion_bg',
    defaultMessage: 'Mostra lo sfondo',
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
}) => {
  const intl = useIntl();

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="accordion_block" defaultMessage="Accordion" />
        </h2>
      </header>
      {/* <Accordion className="form">
        <Accordion.Content active={true}>
          <CheckboxWidget
            id="bg"
            title={intl.formatMessage(messages.bg)}
            value={data.bg}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                bg: value,
              });
            }}
          />
        </Accordion.Content>
      </Accordion> */}
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
                  {subblock?.title?.length > 0
                    ? subblock?.title
                    : 'Elemento [' + index + ']'}
                  {selected === index ? (
                    <Icon name={upSVG} size="20px" />
                  ) : (
                    <Icon name={downSVG} size="20px" />
                  )}
                </Accordion.Title>
                <Accordion.Content active={selected === index}>
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
