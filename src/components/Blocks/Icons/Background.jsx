import React from 'react';
import cx from 'classnames';
import config from '@plone/volto/registry';

const Background = ({ data }) => {
  const Image = config.getComponent({ name: 'Image' }).component;

  return data.background?.[0] ? (
    <div
      className={cx('background-image', {
        [data.bg_color]: data.bg_color,
      })}
    >
      <Image
        item={data.background[0]}
        alt=""
        role={null}
        responsive={true}
        sizes="100vw"
      />
    </div>
  ) : (
    <div
      className={cx('background-image no-image', {
        [data.bg_color]: data.bg_color,
      })}
    ></div>
  );
};

export default Background;
