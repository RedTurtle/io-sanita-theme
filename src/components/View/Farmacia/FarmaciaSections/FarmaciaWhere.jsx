import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Card, CardBody, CardText, CardTitle } from 'design-react-kit';
import { Icon } from 'io-sanita-theme/components';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { OSMMap } from 'volto-venue';

const messages = defineMessages({
  dove: {
    id: 'dove',
    defaultMessage: 'Dove',
  },
  area_territoriale: {
    id: 'area_territoriale',
    defaultMessage: 'Area territoriale',
  },
  comune: {
    id: 'comune',
    defaultMessage: 'Comune',
  },
  localita: {
    id: 'localita',
    defaultMessage: 'Località',
  },
  circoscrizione: {
    id: 'circoscrizione',
    defaultMessage: 'Circoscrizione',
  },
  quartiere: {
    id: 'quartiere',
    defaultMessage: 'Quartiere',
  },
});

const FarmaciaWhere = ({ content }) => {
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
      <Card className="card card-teaser shadow mt-3 rounded mb-4">
        <Icon icon={'it-pin'} />
        <CardBody>
          <CardTitle>
            <h5 className="card-title">{content.title}</h5>
          </CardTitle>
          <CardText>
            {content.area_territoriale && (
              <>
                <p>
                  <strong>
                    {intl.formatMessage(messages.area_territoriale)}:{' '}
                  </strong>
                  {content.area_territoriale.title}
                </p>
              </>
            )}

            {content.comune && (
              <>
                <p>
                  <strong>{intl.formatMessage(messages.comune)}: </strong>
                  {content.comune}
                </p>
              </>
            )}

            {content.localita && (
              <>
                <p>
                  <strong>{intl.formatMessage(messages.localita)}: </strong>
                  {content.localita}
                </p>
              </>
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
      {__CLIENT__ &&
      content.geolocation?.latitude &&
      content.geolocation?.longitude ? (
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
        />
      ) : (
        <></>
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
      )}
    </RichTextSection>
  ) : (
    <></>
  );
};

FarmaciaWhere.propTypes = {
  content: PropTypes.shape({
    geolocation: PropTypes.object,
    street: PropTypes.string,
    zip_code: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    circoscrizione: PropTypes.string,
    quartiere: PropTypes.string,
    area_territoriale: PropTypes.object,
    comune: PropTypes.string,
    provincia: PropTypes.string,
    localita: PropTypes.string,
  }).isRequired,
};

export default FarmaciaWhere;
