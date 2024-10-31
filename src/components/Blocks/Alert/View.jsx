/**
 * View Alert block.
 * @module components/manage/Blocks/Hero/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Row, Col } from 'design-react-kit';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import Wrapper from 'io-sanita-theme/components/Blocks/Alert/Wrapper';
/**
 * View Alert block class.
 * @class View
 * @extends Component
 */
const View = ({ data, id }) => {
  return (
    <Wrapper data={data}>
      <Row className="align-items-start">
        {data.image?.data && (
          <Col sm={2} className="pb-3 image-col">
            <img
              src={`data:${data.image['content-type']};${data.image.encoding},${data.image.data}`}
              alt=""
              aria-hidden="true"
              className={cx('left-image', [
                data.sizeImage ? 'size-' + data.sizeImage : 'size-l',
              ])}
              loading="lazy"
            />
          </Col>
        )}
        <Col>
          <TextBlockView id={id} data={{ value: data.text }} />
        </Col>
      </Row>
    </Wrapper>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default React.memo(View);
