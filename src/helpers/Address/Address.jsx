/*TODO:
- implementare il calcolo della distanza
*/
import React from 'react';
import { Icon } from 'io-sanita-theme/components';

const Address = ({ item, showAddress = true, showDistance, tag }) => {
  const address_row_2 = ['zip_code', 'city', 'province']
    .map((key) => item?.[key])
    .filter(Boolean)
    .join(' - ');
  const AddressWrapperTag = tag ?? React.Fragment;
  // BBB: area_territoriale is an object or a string ... so we need to check
  const area_territoriale =
    typeof item.area_territoriale === 'object'
      ? item.area_territoriale && item.area_territoriale.value
      : item.area_territoriale;

  return item.street?.length > 0 || address_row_2.length ? (
    <>
      {showAddress && (
        <AddressWrapperTag>
          {item.street}
          {area_territoriale && (
            <>
              <br />
              {item.area_territoriale}
            </>
          )}
          {(item.zip_code || item.city || item.province) && (
            <>
              <br />
              {address_row_2}
            </>
          )}
        </AddressWrapperTag>
      )}
      {showDistance && (
        <div className="distance fw-semibold">
          <Icon icon="it-map-marker" size="sm" /> implementare il calcolo della
          distanza
        </div>
      )}
    </>
  ) : null;
};
export default Address;
