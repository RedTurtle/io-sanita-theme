/*
Usa la Card File per
  - allegare documenti o
  - creare un collegamento a una pagina documento
  - fare il download diretto di un file
  - aprire un file pdf come anteprima di stampa se il collegamento contiene @@display-file
  - mostrare un oggetto di tipo collegamento nelle sezioni degli Allegati.
  - mostrare oggetti di tipo Modulo. In questo caso la card file usa il componente Modulo
su qualsiasi pagina foglia del modello
e sulla Pagina lista “Documenti” della sezione Organizzazione.

Gli elementi della card sono
  - titolo del documento,
  - icona,
  - descrizione (opzionale tramite la prop 'showDescription')
  - data di modifica/creazione (opzionale tramite la prop 'showModified')

Il click sulla card può generare un download diretto del file o indirizzare l’utente a una pagina foglia di tipologia Documento.
Il link può essere applicato all’intera card oppure solo al titolo e icona.
In caso di download diretto, è suggerito l’utilizzo dell’icona con il formato corrispondente e l’indicazione di estensione e dimensione nel titolo - ad esempio, (PDF 98KB).
In caso di collegamento a una pagina foglia di tipo documento, è suggerito l’utilizzo di un’icona file generica e non è necessario specificare estensione e peso nel titolo.
*/
import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import cx from 'classnames';
import { Card, CardBody, CardTitle, CardText } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { viewDate } from 'io-sanita-theme/helpers';
import { Icon } from 'io-sanita-theme/components';
import { FileIcon } from 'io-sanita-theme/helpers';
import Module from 'io-sanita-theme/components/Cards/CardFile/Module';

import './cardFile.scss';

const messages = defineMessages({
  attachment: {
    id: 'attachment',
    defaultMessage: 'Allegato',
  },
  link: {
    id: 'link',
    defaultMessage: 'Collegamento',
  },
  last_update: {
    id: 'card_file_last_update',
    defaultMessage: 'Ultimo agg.to:',
  },
});

export const CardFile = ({
  item,
  titleTag = 'h3',
  isEditMode,
  showDescription = true,
  file = null,
  titleDataElement,
  showModified = false,
}) => {
  const intl = useIntl();
  let _item = null;
  let pdfFile = null;

  if (item['@type'] === 'Modulo') {
    return (
      <Module
        item={item}
        titleTag="h3"
        showDescription={showDescription}
        titleDataElement={titleDataElement}
        showModified={showModified}
      />
    );
  }

  // Nel caso fosse un oggetto tipo CT
  if (!file) {
    _item = { ...item };

    switch (item['@type']) {
      case 'File':
        if (item.file) {
          _item = item.file;
        }
        if (item['@id'].indexOf('/@@download/') < 0) {
          _item['@id'] = `${item['@id']}/@@download/file`;
        } else {
          _item['@id'] = item['@id'];
        }
        break;
      case 'Image':
        if (item.image) {
          _item = item.image;
        }
        break;
      case 'Link':
        _item['@id'] =
          item.remoteUrl?.length > 0 ? item.remoteUrl : item['@id'];
        break;
      default:
        break;
    }
    // Nel caso fosse un oggetto MIME type
  } else {
    _item = file;
    pdfFile = file?.download?.includes('@@display-file');
  }

  // ICON
  const defaultIcon = (
    <Icon
      icon="it-document"
      alt={intl.formatMessage(messages.attachment)}
      title={intl.formatMessage(messages.attachment)}
      color="accent"
      size="lg"
    />
  );

  const itemIcon =
    _item['@type'] === 'Link' ? (
      <Icon
        icon="it-external-link"
        alt={intl.formatMessage(messages.link)}
        title={intl.formatMessage(messages.link)}
        color="accent"
        size="lg"
      />
    ) : (
      <FileIcon item={_item} fileFormat={file ? true : false} />
    );

  return (
    <Card className="shadow rounded card-file no-after">
      <CardBody>
        <div className={cx('card-file-content', _item['@type'])}>
          <CardTitle tag={titleTag} className="d-flex mb-0 align-items-center">
            {!file ? (
              <UniversalLink
                item={!isEditMode ? _item : null}
                href={isEditMode ? '#' : ''}
                className="card-title-link flex-grow-1 pe-4"
                target={_item['@type'] === 'Link' ? '_blank' : '_self'}
                rel={_item['@type'] === 'Link' ? 'noopener noreferrer' : ''}
                data-element={titleDataElement}
              >
                {item.title}
              </UniversalLink>
            ) : (
              <a
                className="card-title-link flex-grow-1 pe-4"
                href={flattenToAppURL(file.download)}
                title={file.filename}
                target={pdfFile ? '_blank' : '_self'}
                rel={pdfFile ? 'noopener noreferrer' : ''}
                data-element={titleDataElement}
              >
                {file.filename}
              </a>
            )}

            {itemIcon ?? defaultIcon}
          </CardTitle>

          {item.description && showDescription && (
            <CardText tag="div" className="mt-2">
              <p>{item.description}</p>
            </CardText>
          )}
          {showModified && item?.modified && item?.['@type'] === 'File' && (
            <p>
              {intl.formatMessage(messages.last_update)}{' '}
              {viewDate(intl.locale, item?.modified, 'DD-MM-Y HH:MM')}
            </p>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default CardFile;
