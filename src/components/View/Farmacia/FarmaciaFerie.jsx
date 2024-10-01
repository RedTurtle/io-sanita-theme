import { RichTextSection } from 'io-sanita-theme/helpers';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  ferie: {
    id: 'farmacia_ferie',
    defaultMessage: 'Ferie',
  },
  ferie_from: {
    id: 'farmacia_ferie_from',
    defaultMessage: 'Dal',
  },
  ferie_to: {
    id: 'farmacia_ferie_to',
    defaultMessage: 'Al',
  },
});

const FarmaciaFerie = ({ content }) => {
  const intl = useIntl();

  return content?.ferie?.length > 0 ? (
    <RichTextSection tag_id="ferie" title={intl.formatMessage(messages.ferie)}>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col" className="text-uppercase">
              {intl.formatMessage(messages.ferie_from)}
            </th>
            <th scope="col" className="text-uppercase">
              {intl.formatMessage(messages.ferie_to)}
            </th>
          </tr>
        </thead>
        <tbody>
          {content.ferie.map((item) => (
            <tr>
              <td>{item.dal}</td>
              <td>{item.al}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </RichTextSection>
  ) : (
    <></>
  );
};

FarmaciaFerie.propTypes = {
  content: PropTypes.shape({
    ferie: PropTypes.array,
  }).isRequired,
};

export default FarmaciaFerie;
