import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'design-react-kit';
import { RichTextSection, useClientPagination } from 'io-sanita-theme/helpers';
import { CardFile } from 'io-sanita-theme/components';

import {
  CardSimple,
  CardImage,
  CardPlace,
  CardPersona,
  Pagination,
} from 'io-sanita-theme/components';

const RenderItem = ({ item }) => {
  switch (item['@type']) {
    case 'News Item':
      return <CardImage item={item} titleTag="h3" />;
      break;
    case 'Struttura':
      return <CardPlace item={item} titleTag="h3" />;
      break;
    case 'Persona':
      return <CardPersona item={item} titleTag="h3" />;
      break;
    case 'File' || 'Image' || 'Link' || 'Modulo':
      return <CardFile item={item} showModified={true} />;
      break;
    default:
      return <CardSimple item={item} titleTag="h3" />;
  }
};

const BackReferencesWrapper = ({ title, id, children }) => {
  return title && id ? (
    <RichTextSection tag_id={id} title={title}>
      {children}
    </RichTextSection>
  ) : (
    <>{children}</>
  );
};

const BackReferences = ({ id, title, content, type }) => {
  const backreferences =
    content?.['@components']?.['view-extra-data']?.['back-references'];
  let items = backreferences?.[type] ?? [];

  switch (type) {
    case 'persona_uo':
      items = [
        ...(backreferences?.['responsabile']?.['UnitaOrganizzativa'] ?? []),
        ...(backreferences?.['personale']?.['UnitaOrganizzativa'] ?? []),
      ];
      break;
    case 'persona_strutture':
      items = [
        ...(backreferences?.['responsabile']?.['Struttura'] ?? []),
        ...(backreferences?.['personale']?.['Struttura'] ?? []),
        ...(content.struttura_in_cui_opera ?? []),
      ];
      break;
    case 'bando':
      items = content?.items;
      break;
    default:
      break;
  }

  const { onPaginationChange, currentPage, totalPages, displayItems, ref } =
    useClientPagination({ items: items });

  return items.length > 0 ? (
    <BackReferencesWrapper title={title} id={id}>
      <div className="backreferences" ref={ref}>
        <Row>
          {displayItems.map((b, i) => (
            <Col lg={6} className="py-2" key={b['@id'] + i}>
              <RenderItem item={b} />
            </Col>
          ))}
        </Row>

        {totalPages > 1 && (
          <div className="pagination-wrapper">
            <Pagination
              activePage={currentPage}
              totalPages={totalPages}
              onPageChange={(e, { activePage }) => {
                onPaginationChange(activePage);
              }}
            />
          </div>
        )}
      </div>
    </BackReferencesWrapper>
  ) : (
    <></>
  );
};

BackReferences.propTypes = {
  content: PropTypes.object.isRequired,
  type: PropTypes.string, //nome del portal type, oppure 'responsabile' o 'personale', oppure 'persona_uo' cerca tutte le uo nelle backreferences 'personale' e 'responsabile'
  add_items: PropTypes.array,
};

export default BackReferences;
