import React from 'react';
import cx from 'classnames';
import { Container } from 'design-react-kit';

const ListingContainer = ({ data, isEditMode, children, ...rest }) => {
  return (
    <Container
      className={cx({
        'px-0': isEditMode || !data?.show_block_bg,
        'px-4': !isEditMode && data?.show_block_bg,
      })}
      {...rest}
    >
      {children}
    </Container>
  );
};
export default ListingContainer;
