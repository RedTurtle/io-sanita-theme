/*
Usa la Card Guide per creare un collegamento a una pagina foglia Come fare per.

Gli elementi sono titolo e icona.
Si suggerisce di inserire un testo sintetico per non andare su più righe.
*/
import React from 'react';

import { Card, CardBody, CardTitle } from 'design-react-kit';

import { UniversalLink, Icon as VoltoIcon } from '@plone/volto/components';

import bookIcon from 'io-sanita-theme/icons/book_icon.svg';

import './cardGuide.scss';

export const CardGuide = ({
  item,
  isEditMode,
  titleTag = 'h3',
  titleDataElement,
}) => {
  return (
    <Card className="shadow rounded card-guide no-after">
      <CardBody>
        <div className="card-guide-content">
          <CardTitle tag={titleTag} className="d-flex my-0 align-items-center">
            <UniversalLink
              item={!isEditMode ? item : null}
              href={isEditMode ? '#' : ''}
              className="card-title-link flex-grow-1 pe-4"
              data-element={titleDataElement}
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
