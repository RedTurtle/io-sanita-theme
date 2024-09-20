import React from 'react';
import { QuickSearchSections } from 'io-sanita-theme/components';

const Body = ({ data, id }) => {
  return (
    <>
      quick search block
      <QuickSearchSections onChange={() => {}} scrollOnMobile={true} />
    </>
  );
};

export default Body;
