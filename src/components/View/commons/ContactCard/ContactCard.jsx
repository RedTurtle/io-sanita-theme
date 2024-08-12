import { Card, CardBody, CardText, CardTitle, Icon } from 'design-react-kit';
import { useIntl } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';

import { PuntoDiContattoValue } from 'io-sanita-theme/helpers';

const ContactCard = ({ contact = {}, show_title = false, ...rest }) => {
  const intl = useIntl();
  const contactUrl = contact['@id'];

  return (
    <Card
      teaser
      noWrapper
      className="shadow rounded my-3 contacts-card"
      {...rest}
    >
      {show_title && <Icon icon="it-telephone" />}
      <CardBody>
        <CardTitle className="h5">
          {show_title && (
            <UniversalLink href={contactUrl} className="text-decoration-none">
              {contact.title}
            </UniversalLink>
          )}
        </CardTitle>
        <CardText>
          {contact?.value_punto_contatto?.map((pdc, index) => (
            <span key={index}>
              <strong>
                <span className="pdc-type">{pdc.pdc_type}</span>
                <span className="pdc-desc">
                  {pdc.pdc_desc ? ` - ${pdc.pdc_desc}` : ''}:{' '}
                </span>
              </strong>
              <PuntoDiContattoValue value={pdc} />
            </span>
          )) ?? null}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default ContactCard;
