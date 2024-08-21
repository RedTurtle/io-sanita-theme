/*
Usa la Card Guide per creare un collegamento a una pagina foglia Come fare per.

Gli elementi sono titolo e icona.
Si suggerisce di inserire un testo sintetico per non andare su più righe.
*/
import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import cx from 'classnames';
import { Card, CardBody, CardTitle, CardText } from 'design-react-kit';

import { UniversalLink, Icon as VoltoIcon } from '@plone/volto/components';
import config from '@plone/volto/registry';
import { Icon } from 'io-sanita-theme/components';
import { FileIcon } from 'io-sanita-theme/helpers';

import bookIcon from 'io-sanita-theme/icons/book_icon.svg';

import './cardGuide.scss';

const messages = defineMessages({
  link: {
    id: 'link',
    defaultMessage: 'Collegamento',
  },
});

export const CardGuide = ({ item, isEditMode, titleTag = 'h3' }) => {
  const intl = useIntl();
  let _item = { ...item };

  return (
    <Card className="shadow rounded card-guide no-after">
      <CardBody>
        <div className="card-guide-content">
          <CardTitle tag={titleTag} className="d-flex my-0 align-items-center">
            <UniversalLink
              item={!isEditMode ? item : null}
              href={isEditMode ? '#' : ''}
              className="card-title-link flex-grow-1 pe-4"
            >
              {item.title}
            </UniversalLink>

            <VoltoIcon className="icon-svg-book" size="sm" name={bookIcon} />
          </CardTitle>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardGuide;
