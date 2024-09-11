/*
Implementa la
- Card basic (se è un bando, mostra la data di pubblicazione del bando)
- Card list (mostra la descrizione)
- Card services (se è un servizio che può essere usufruito online, viene messo il badge non cliccabile)
del modello dei siti ASL, la prop che va a leggere è: 'servizio_attivo'
*/

import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { Card, CardBody, CardTitle, CardText, Badge } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { CardCategoryBottom } from 'io-sanita-theme/components';
import { viewDate } from 'io-sanita-theme/helpers';
import './cardSimple.scss';

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
  titleTag = 'h5',
  titleDataElement,
}) => {
  const intl = useIntl();
  const date =
    item['@type'] === 'Bando' && item.effective
      ? viewDate(intl.locale, item.effective, 'DD MMMM YYYY')
      : null;

  const isServizioOnline =
    item['@type'] === 'Servizio' && item?.servizio_attivo;

  return (
    <Card className={`shadow rounded no-after card-simple ${className ?? ''}`}>
      <CardBody>
        <div className="card-body-main">
          <CardTitle tag={titleTag} className={isServizioOnline ? 'mb-1' : ''}>
            {item['@id'] ? (
              <UniversalLink
                item={!isEditMode ? item : null}
                href={isEditMode ? '#' : ''}
                className="card-title-link"
                data-element={titleDataElement}
              >
                {item.title}
              </UniversalLink>
            ) : (
              <>{item.title}</>
            )}
          </CardTitle>

          {/* Chip servizio attivo */}
          {isServizioOnline && (
            <div className="mb-3">
              <Badge color="primary-lightest">
                {intl.formatMessage(messages.servizioOnline)}
              </Badge>
            </div>
          )}

          <CardText tag="div">
            {showDescription && <>{item.description}</>}
          </CardText>
        </div>
        <CardCategoryBottom item={item} date={date} isEditMode={isEditMode} />
      </CardBody>
    </Card>
  );
};

export default CardSimple;
