/**
 * View image block.
 * @module components/manage/Blocks/Hero/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import StoresButtons from 'io-sanita-theme/components/Blocks/Hero/StoresButtons';
import { LinkedHeadline } from 'io-sanita-theme/components';
import './hero.scss';
/**
 * View image block class.
 * @class View
 * @extends Component
 */
const View = ({ data, id }) => {
  const show_bg = data.show_block_bg === undefined ? true : data.show_block_bg;

  return (
    <div className="public-ui">
      <div className="block hero">
        <div className="block-inner-wrapper">
          {data.url && (
            <div className="hero-image">
              <img
                src={`${flattenToAppURL(data.url)}/@@images/image/teaser`}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
            </div>
          )}
          <div
            className={cx('hero-body', {
              'no-bg': !show_bg,
              'bg-primary-lightest': show_bg,
            })}
          >
            {data.title && <LinkedHeadline title={data.title} id={id} />}

            {data.description && <p>{data.description}</p>}
            <StoresButtons data={data} />
          </div>
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
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default View;
