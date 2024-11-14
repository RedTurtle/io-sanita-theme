import React from 'react';
import cx from 'classnames';
import config from '@plone/volto/registry';

const Background = ({ data }) => {
  const Image = config.getComponent({ name: 'Image' }).component;
  const bg_color =
    ['primary', 'secondary'].indexOf(data.bg_color ?? '') >= 0
      ? data.bg_color == 'primary'
        ? 'bg-primary-lightest'
        : 'bg-primary-dark'
      : data.bg_color; //for backward compatibility with old io-comune-v2

  return data.background?.[0] ? (
    <div
      className={cx('background-image', {
        [bg_color]: bg_color,
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
        [bg_color]: bg_color,
      })}
    ></div>
  );
};

export default Background;
