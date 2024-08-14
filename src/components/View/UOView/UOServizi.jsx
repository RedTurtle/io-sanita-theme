import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { Pagination } from 'io-sanita-theme/components';
import { UniversalLink } from '@plone/volto/components';
import { usePaginatedItemsSection } from 'io-sanita-theme/helpers';
import { CardSimple } from 'io-sanita-theme/components';

const messages = defineMessages({
  servizi: {
    id: 'uo_servizi',
    defaultMessage: 'Servizi',
  },
});

const UOServizi = ({ content }) => {
  const intl = useIntl();

  const servizi = content?.servizi ?? [];
  const { batches, currentPage, onPaginationChange, pageNumbers, bSize } =
    usePaginatedItemsSection({ data: servizi });

  return content?.servizi?.length > 0 ? (
    <RichTextSection
      tag_id="servizi"
      title={intl.formatMessage(messages.servizi)}
    >
      <Row className="card-wrapper card-teaser-wrapper align-items-stretch">
        {batches?.map((servizio, i) => (
          <Col xs="12" lg="6" className="mb-3" key={servizio['@id']}>
            <CardSimple item={servizio} />
          </Col>
        ))}
      </Row>
      {servizi.length > bSize && (
        <div className="pagination-wrapper">
          <Pagination
            activePage={currentPage}
            totalPages={pageNumbers}
            onPageChange={onPaginationChange}
          />
        </div>
      )}
    </RichTextSection>
  ) : null;
};

export default UOServizi;
