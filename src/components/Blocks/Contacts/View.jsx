/**
 * View Accordion block.
 * @module components/ItaliaTheme/Blocks/Accordion/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import ViewBlock from './Block/ViewBlock';
import { Container, Row, Col } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import './contacts.scss';
/**
 * View Accordion block class.
 * @class View
 * @extends Component
 */
const AccordionView = ({ data, block, id }) => {
  const now = new Date().getTime();
  const href =
    typeof data.href == 'string'
      ? [
          {
            '@id': data.href,
            title: data.linkMoreTitle,
          },
        ]
      : data.href; //backward compatibility with old io-comune

  return (
    <div className="block contacts" id={id}>
      <div className="public-ui">
        <div className={`full-width section ${data.bg_color} py-5`}>
          <Container className="px-md-4">
            {(data.title || data.description) && (
              <div className="block-header">
                {data.title && <div className="title">{data.title}</div>}
                {data.description && (
                  <div className="description">
                    <TextBlockView id={id} data={{ value: data.description }} />
                  </div>
                )}
              </div>
            )}
            <Row
              className={
                data.subblocks.length > 3
                  ? 'justify-content-start'
                  : 'justify-content-center'
              }
            >
              {data.subblocks.map((subblock, index) => (
                <Col lg="4" key={subblock.id} className="pb-3">
                  <ViewBlock
                    data={subblock}
                    key={index}
                    id={now}
                    index={index}
                  />
                </Col>
              ))}
            </Row>

            {href?.length > 0 && data.linkMoreTitle && (
              <div className="link-button text-center my-4">
                <UniversalLink item={href[0]} className="btn btn-tertiary">
                  {data.linkMoreTitle}
                </UniversalLink>
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
AccordionView.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AccordionView;
