/*
Implementa la
- Card basic (se è un bando, mostra la data di pubblicazione del bando)
- Card list (mostra la descrizione)
- Card services (se è un servizio che può essere usufruito online, viene messo il badge non cliccabile)
del modello dei siti ASL
*/

import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { Card, CardBody, CardTitle, CardText, Badge } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { CardCategoryBottom } from 'io-sanita-theme/components';
import { viewDate } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  servizioOnline: {
    id: 'servizio_online_chip',
    defaultMessage: 'Servizio online',
  },
});
export const CardSimple = ({
  showDescription = true,
  item,
  isEditMode,
  className,
}) => {
  const intl = useIntl();
  const date =
    item['@type'] === 'Bando' && item.effective
      ? viewDate(intl.locale, item.effective, 'DD MMMM YYYY')
      : null;
  const isServizioOnline =
    item['@type'] === 'Servizio' && item.canale_digitale_link;
  return (
    <Card className={`shadow rounded card-simple no-after ${className ?? ''}`}>
      <CardBody>
        <div className="card-simple-content">
          <CardTitle tag="h5" className={isServizioOnline ? 'mb-0' : ''}>
            {item['@id'] ? (
              <UniversalLink
                item={!isEditMode ? item : null}
                href={isEditMode ? '#' : ''}
                className="card-title-link"
              >
                {item.title}
              </UniversalLink>
            ) : (
              <>{item.title}</>
            )}
          </CardTitle>

          {isServizioOnline && (
            <div className="mb-2">
              <Badge color="primary-lightest">
                {intl.formatMessage(messages.servizioOnline)}
              </Badge>
            </div>
          )}
          <CardText tag="div">
            {showDescription && <>{item.description}</>}

            <CardCategoryBottom
              category={item.parliamo_di_metadata?.[0]}
              date={date}
              isEditMode={isEditMode}
            />
          </CardText>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardSimple;
