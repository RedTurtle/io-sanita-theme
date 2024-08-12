/*TODO:
- implementare il calcolo della distanza
*/
import { Icon } from 'io-sanita-theme/components';

const Address = ({ item, showAddress = true, showDistance }) => {
  const address_row_2 = ['zip_code', 'city', 'province']
    .map((key) => item?.[key])
    .filter(Boolean)
    .join(' - ');

  return item.street || address_row_2.length ? (
    <>
      {showAddress && (
        <>
          {item.street}
          {(item.zip_code || item.city || item.province) && (
            <>
              <br />
              {address_row_2}
            </>
          )}
        </>
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
