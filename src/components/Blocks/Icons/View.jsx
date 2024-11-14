/**
 * View IconsBlock block.
 * @module components/ItaliaTheme/Blocks/Accordion/View
 */

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ViewBlock from './Block/ViewBlock';
import { Container, Row, Col } from 'design-react-kit';

import { TextBlockView } from '@plone/volto-slate/blocks/Text';

import MoreButton from './MoreButton';
import Background from './Background';
import './icons.scss';

/**
 * View IconsBlock block class.
 * @class View
 * @extends Component
 */
const IconsBlockView = ({ data, block }) => {
  const id = new Date().getTime();
  const bg_color =
    ['primary', 'secondary'].indexOf(data.bg_color ?? '') >= 0
      ? data.bg_color == 'primary'
        ? 'bg-primary-lightest'
        : 'bg-primary-dark'
      : data.bg_color; //for backward compatibility with old io-comune-v2
  return (
    <div className="block iconBlocks">
      <div className="public-ui">
        <div
          className={cx('full-width section py-5 icons-block-wrapper', {
            [bg_color]: bg_color,
          })}
        >
          <Background data={data} />

          <Container className="px-md-4">
            <div className="block-header text-center">
              {data.title && <h2 className="title">{data.title}</h2>}
              {data.description && (
                <div className="description">
                  <TextBlockView data={{ value: data.description }} />
                </div>
              )}
            </div>
            <Row className={cx({ center: data.alignCards })}>
              {data.subblocks.map((subblock, index) => (
                <Col lg="4" xl="3" key={subblock.id} className="mb-3">
                  <ViewBlock
                    data={subblock}
                    key={index}
                    id={id}
                    index={index}
                    blockHasTitle={data.title?.length > 0}
                  />
                </Col>
              ))}
            </Row>

            <MoreButton data={data} />
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
IconsBlockView.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default IconsBlockView;
