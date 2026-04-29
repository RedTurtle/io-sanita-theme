import { defineMessages, useIntl } from 'react-intl';

import { Locations } from 'io-sanita-theme/components/View/commons';
import PropTypes from 'prop-types';
// import { CardPlace } from 'io-sanita-theme/components';
import { RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  dove: {
    id: 'farmacia_dove',
    defaultMessage: 'Dove',
  },
  area_territoriale: {
    id: 'farmacia_area_territoriale',
    defaultMessage: 'Area territoriale',
  },
  comune: {
    id: 'farmacia_comune',
    defaultMessage: 'Comune',
  },
  localita: {
    id: 'farmacia_localita',
    defaultMessage: 'Località',
  },
  quartiere: {
    id: 'farmacia_quartiere',
    defaultMessage: 'Quartiere',
  },
});

const FarmaciaDove = ({ content }) => {
  const intl = useIntl();

  return (content.geolocation?.latitude && content.geolocation?.longitude) ||
    content.street ||
    content.zip_code ||
    content.city ||
    content.provincia ||
    content.country ||
    content.quartiere ||
    content.area_territoriale?.title ||
    content.comune ||
    content.localita ? (
    <RichTextSection tag_id="dove" title={intl.formatMessage(messages.dove)}>
      <Locations content={content} />
    </RichTextSection>
  ) : (
    <></>
  );
};

FarmaciaDove.propTypes = {
  content: PropTypes.shape({
    geolocation: PropTypes.object,
  }).isRequired,
};

export default FarmaciaDove;
