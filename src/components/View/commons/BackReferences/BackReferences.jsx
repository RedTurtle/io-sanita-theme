import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'design-react-kit';
import { RichTextSection, useClientPagination } from 'io-sanita-theme/helpers';

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
      return <CardImage item={item} />;
      break;
    case 'Struttura':
      return <CardPlace item={item} />;
      break;
    case 'Persona':
      return <CardPersona item={item} />;
      break;
    default:
      return <CardSimple item={item} />;
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
  let backreferences =
    content?.['@components']?.['back-references']?.[type] ?? [];

    switch(type){
      case 'persona_uo':
        backreferences = [ ...content?.['@components']?.['back-references']?.['responsabile']?.['UnitaOrganizzativa'] ?? [], ...content?.['@components']?.['back-references']?.['personale']?.['UnitaOrganizzativa'] ?? []];
        break;
      case 'persona_strutture':
        backreferences = [ ...content?.['@components']?.['back-references']?.['responsabile']?.['Struttura'] ?? [], ...content?.['@components']?.['back-references']?.['personale']?.['Struttura'] ?? []];
      default:
        break;
    }

  const { onPaginationChange, currentPage, totalPages, displayItems, ref } =
    useClientPagination({ items: backreferences });

  return backreferences.length > 0 ? (
    <BackReferencesWrapper title={title} id={id}>
      <div className="backreferences" ref={ref}>
        <Row>
          {displayItems.map((b, i) => (
            <Col lg={6} className="py-2" key={b['@id'] + i}>
              <RenderItem item={b} />
            </Col>
          ))}
        </Row>

        {totalPages > 1 &&
          <div className="pagination-wrapper">
            <Pagination
              activePage={currentPage}
              totalPages={totalPages}
              onPageChange={(e, { activePage }) => {
                onPaginationChange(activePage);
              }}
            />
          </div>
        }
      </div>
    </BackReferencesWrapper>
  ) : (
    <></>
  );
};

BackReferences.propTypes = {
  content: PropTypes.object.isRequired,
  type: PropTypes.string, //nome del portal type, oppure 'responsabile' o 'personale', oppure 'persona_uo' cerca tutte le uo nelle backreferences 'personale' e 'responsabile'
};

export default BackReferences;
