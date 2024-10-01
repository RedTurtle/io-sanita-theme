import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  turni: {
    id: 'farmacia_turni',
    defaultMessage: 'Turni',
  },
  turni_from: {
    id: 'farmacia_turni_from',
    defaultMessage: 'Dal',
  },
  turni_to: {
    id: 'farmacia_turni_to',
    defaultMessage: 'Al',
  },
});

const FarmaciaTurni = ({ content }) => {
  const intl = useIntl();

  return content?.turni?.length > 0 ? (
    <RichTextSection tag_id="turni" title={intl.formatMessage(messages.turni)}>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col" className="text-uppercase">
              {intl.formatMessage(messages.turni_from)}
            </th>
            <th scope="col" className="text-uppercase">
              {intl.formatMessage(messages.turni_to)}
            </th>
          </tr>
        </thead>
        <tbody>
          {content.turni.map((shift, index) => (
            <tr key={index}>
              <td>{shift.dal}</td>
              <td>{shift.al}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </RichTextSection>
  ) : (
    <></>
  );
};

FarmaciaTurni.propTypes = {
  content: PropTypes.shape({
    turni: PropTypes.array,
  }).isRequired,
};

export default FarmaciaTurni;
