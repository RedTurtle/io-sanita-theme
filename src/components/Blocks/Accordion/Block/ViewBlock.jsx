/**
 * ViewBlock.
 * @module components/ItaliaTheme/Blocks/Accordion/Block/ViewBlock
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import cx from 'classnames';
import { Icon, LinkMore } from 'io-sanita-theme/components';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';

const messages = defineMessages({
  vedi: {
    id: 'Vedi',
    defaultMessage: 'Vedi',
  },
  closeAccordion: {
    id: 'closeAccordion',
    defaultMessage: "Chiudi l'accordion",
  },
  openAccordion: {
    id: 'openAccordion',
    defaultMessage: "Apri l'accordion",
  },
});

/**
 * ViewBlock class.
 * @class ViewBlock
 * @extends Component
 */
const ViewBlock = ({ data, isOpen, toggle, id, index }) => {
  const intl = useIntl();

  return (
    <div className="accordion-item subblock-view">
      {data.title && (
        <h3 className="accordion-header">
          <button
            onClick={toggle()}
            aria-expanded={isOpen}
            aria-controls={`content-${id}-${index}`}
            id={`${id}-${index}`}
          >
            <Icon
              color="primary"
              icon={isOpen ? 'it-minus' : 'it-plus'}
              padding={false}
              title={
                isOpen
                  ? intl.formatMessage(messages.closeAccordion)
                  : intl.formatMessage(messages.openAccordion)
              }
            />

            {data.title}
          </button>
        </h3>
      )}

      {data.text && (
        <div
          className={cx('accordion-content', { open: isOpen })}
          id={`content-${id}-${index}`}
          role="region"
          aria-labelledby={`${id}-${index}`}
        >
          <div className="accordion-inner" onFocus={toggle()}>
            <TextBlockView id={id} data={{ value: data.text }} />
          </div>
          {data.href && (
            <LinkMore
              href={[{ '@id': data.href }]}
              title={data.linkMoreTitle || intl.formatMessage(messages.vedi)}
            />
          )}
        </div>
      )}
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ViewBlock.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ViewBlock;
