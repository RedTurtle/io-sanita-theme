/*
Usa la Card File per allegare documenti o
creare un collegamento a una pagina documento
su qualsiasi pagina foglia del modello
e sulla Pagina lista “Documenti” della sezione Organizzazione.


Gli elementi della card sono titolo del documento, icona, descrizione.Il click sulla card può generare un download diretto del file o indirizzare l’utente a una pagina foglia di tipologia Documento. Il link può essere applicato all’intera card oppure solo al titolo e icona. In caso di download diretto, è suggerito l’utilizzo dell’icona con il formato corrispondente e l’indicazione di estensione e dimensione nel titolo - ad esempio, (PDF 98KB).
In caso di collegamento a una pagina foglia di tipo documento, è suggerito l’utilizzo di un’icona file generica e non è necessario specificare estensione e peso nel titolo.
*/
import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import cx from 'classnames';
import { Card, CardBody, CardTitle, CardText } from 'design-react-kit';

import { UniversalLink, Icon as VoltoIcon } from '@plone/volto/components';
import config from '@plone/volto/registry';
import { Icon } from 'io-sanita-theme/components';
import { FileIcon } from 'io-sanita-theme/helpers';

import './cardFile.scss';

const messages = defineMessages({
  attachment: {
    id: 'attachment',
    defaultMessage: 'Allegato',
  },
});

export const CardFile = ({ item, isEditMode }) => {
  const intl = useIntl();
  let _item = { ...item };

  const defaultIcon = (
    <Icon
      icon="it-document"
      alt={intl.formatMessage(messages.attachment)}
      title={intl.formatMessage(messages.attachment)}
      color="accent"
      size="lg"
    />
  );

  switch (item['@type']) {
    case 'File':
      _item = item.file;
      _item['@id'] = `${item['@id']}/@@download/file`;
      break;
    case 'Image':
      _item = item.image;
      break;
    case 'Link':
      _item['@id'] = item.remoteUrl?.length > 0 ? item.remoteUrl : item['@id'];
      break;
    default:
      break;
  }

  const fileIcon = <FileIcon item={_item} />;

  return (
    <Card className="shadow rounded card-file no-after">
      <CardBody>
        <div className="card-file-content">
          <CardTitle tag="h5" className="d-flex mb-0 align-items-center">
            <UniversalLink
              item={!isEditMode ? item : null}
              href={isEditMode ? '#' : ''}
              className="card-title-link flex-grow-1 pe-4"
            >
              {item.title}
            </UniversalLink>

            {fileIcon ?? defaultIcon}
          </CardTitle>

          {item.description && (
            <CardText tag="div" className="mt-2">
              <p>{item.description}</p>
            </CardText>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default CardFile;