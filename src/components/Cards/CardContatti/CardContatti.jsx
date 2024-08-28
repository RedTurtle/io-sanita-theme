/*
  Questa Card è stata creata da noi, sui template Agid non c'è
  Utilizza questa CardContatti per mostrare la correlazione coi Punti di contatto
*/
import { Card, CardBody, CardCategory, CardText, CardTitle, Icon } from 'design-react-kit';
import { useIntl } from 'react-intl';
import { UniversalLink, Icon as VoltoIcon } from '@plone/volto/components';
import { PuntoDiContattoValue } from 'io-sanita-theme/helpers';

import telephoneIcon from 'io-sanita-theme/icons/telephone_icon.svg';

import './cardContatti.scss';

const CardContatti = ({ item = {}, show_title = false, ...rest }) => {
  const intl = useIntl();
  const contactUrl = item['@id'];

  return (
    <Card className="shadow rounded card-contatti no-after" {...rest}>
      <CardBody>
      {show_title && (
        <CardTitle className="h5">
          <VoltoIcon className="me-2 icon-sm icon-svg-telephone" name={telephoneIcon} />
          <UniversalLink href={contactUrl} className="text-decoration-none">
            {item.title}
          </UniversalLink>
        </CardTitle>
      )}
      {item?.contatti?.length > 0 && (
        <CardText tag="div">
          {item?.contatti?.map((pdc, index) => (
            <span key={index}>
              <span className="pdc-type">{pdc.tipo}</span>
              {/* <span className="pdc-desc">
                {pdc.descrizione ? ` - ${pdc.descrizione}` : ''}:{' '}
              </span> */}
              :{' '}
              <PuntoDiContattoValue value={pdc} />
            </span>
          )) ?? null}
        </CardText>
      )}
      </CardBody>
    </Card>
  );
};

export default CardContatti;
