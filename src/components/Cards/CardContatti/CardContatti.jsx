/*
  Questa Card è stata creata da noi, sui template Agid non c'è
  Utilizza questa CardContatti per mostrare la correlazione coi Punti di contatto
*/
import cx from 'classnames';
import { Card, CardBody, CardText, CardTitle } from 'design-react-kit';

import VoltoIcon from '@plone/volto/components/theme/Icon/Icon';
import { PuntoDiContattoValue } from 'io-sanita-theme/helpers';

import telephoneIcon from 'io-sanita-theme/icons/telephone_icon.svg';

import './cardContatti.scss';

const CardContatti = ({
  item = {},
  show_title = false,
  className,
  ...rest
}) => {
  return (
    <Card
      className={cx('shadow rounded card-contatti no-after', className)}
      {...rest}
    >
      <CardBody>
        {show_title && (
          <CardTitle className="h5">
            <VoltoIcon
              className="me-2 icon-sm icon-svg-telephone"
              name={telephoneIcon}
            />
            {item.title}
          </CardTitle>
        )}
        {item?.contatti?.length > 0 && (
          <CardText tag="div">
            {item?.contatti?.map((pdc, index) => {
              return pdc.valore ? (
                <span key={index}>
                  <span className="pdc-type">{pdc.tipo_label || pdc.tipo}</span>
                  : <PuntoDiContattoValue value={pdc} />
                  <span className="pdc-desc">
                    {pdc.descrizione ? ` - ${pdc.descrizione}` : ''}
                  </span>
                </span>
              ) : (
                <></>
              );
            })}
          </CardText>
        )}
      </CardBody>
    </Card>
  );
};

export default CardContatti;
