import React from 'react';
import { Button } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { Icon } from 'io-sanita-theme/components';

const MoreButton = ({ data, isEditMode }) => {
  const href =
    data.href?.length > 0
      ? typeof data.href === 'string'
        ? [{ '@id': data.href }]
        : data.href
      : null; //for backword compatibility with old io-comune-v2

  return href && data.linkMoreTitle ? (
    <div className="text-center my-4">
      <Button
        tag={UniversalLink}
        color={data.bg_color == 'bg-primary-dark' ? 'accent' : 'primary'}
        className={data.bg_color == 'bg-primary-dark' ? 'inverted' : ''}
        size="sm"
        disabled={isEditMode}
        item={href}
        icon={true}
      >
        {data.linkMoreTitle}
        <Icon
          color="white"
          icon="it-arrow-right"
          className="arrow-icon ms-1"
          padding={false}
        />
      </Button>
    </div>
  ) : (
    <></>
  );
};

export default MoreButton;
