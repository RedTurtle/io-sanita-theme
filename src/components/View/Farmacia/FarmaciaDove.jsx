import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
// import { CardPlace } from 'io-sanita-theme/components';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { Locations } from 'io-sanita-theme/components/View/commons';

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
  circoscrizione: {
    id: 'farmacia_circoscrizione',
    defaultMessage: 'Circoscrizione',
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
    content.circoscrizione ||
    content.quartiere ||
    content.area_territoriale?.title ||
    content.comune ||
    content.localita ? (
    <RichTextSection tag_id="dove" title={intl.formatMessage(messages.dove)}>
      {/* <CardPlace
        item={{
          ...content,
          city: content.comune,
          province: content.provincia,
          area_territoriale: content.area_territoriale?.title,
          street: `${content.street} - ${content.localita}`,
        }}
        showDistance={false}
        showMap={true}
      /> */}

      <Locations content={content} />

      {/* -- codice originale versione auslfe

      <Card className="card card-teaser shadow mt-3 rounded mb-4" tag="div">
        <Icon icon={'it-pin'} />
        <CardBody>
          <CardTitle tag="h5" className="card-title">
            {content.title}
          </CardTitle>
          <CardText tag="div">
            {content.area_territoriale && (
              <p>
                <strong>{`${intl.formatMessage(messages.area_territoriale)}: `}</strong>
                {content.area_territoriale.title}
              </p>
            )}

            {content.comune && (
              <p>
                <strong>{`${intl.formatMessage(messages.comune)}: `}</strong>
                {content.comune}
              </p>
            )}

            {content.localita && (
              <p>
                <strong>{`${intl.formatMessage(messages.localita)}: `}</strong>
                {content.localita}
              </p>
            )}

            <p>
              {[content.street, content.city]
                .filter((v) => v !== null)
                .join(' - ')}
              {(content.street || content.city) &&
                (content.zip_code || content.country) &&
                !content.provincia && <br />}

              {content.provincia && ' (' + content.provincia + ')\n'}

              {content.zip_code && content.country?.title
                ? [content.zip_code, content.country?.title]
                    .filter((v) => v !== null)
                    .join(' - ')
                : content.zip_code || content.country?.title}
            </p>
          </CardText>
        </CardBody>
      </Card>
      {
        content.geolocation?.latitude &&
        content.geolocation?.longitude && (
        <>{__CLIENT__ ?
          <OSMMap
            markers={[
              {
                latitude: content.geolocation.latitude,
                longitude: content.geolocation.longitude,
                title: content.title,
              },
            ]}
            mapOptions={{
              scrollWheelZoom: false,
              // tap: false,
              // dragging: false,
            }}
          />:<div>Loading...</>}</>
        )}
      {content.circoscrizione && (
        <div className="circoscrizione">
          <h5 className="mt-3">
            {intl.formatMessage(messages.circoscrizione)}:
          </h5>
          <div className="text-serif">{content.circoscrizione}</div>
        </div>
      )}
      {content.quartiere && (
        <div className="quartiere">
          <h5 className="mt-3">{intl.formatMessage(messages.quartiere)}:</h5>
          <div className="text-serif">{content.quartiere}</div>
        </div>
      )} */}
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
