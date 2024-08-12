import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardCategory,
  CardTitle,
  CardText,
} from 'design-react-kit';
import { Pagination } from 'io-sanita-theme/components';
import { UniversalLink } from '@plone/volto/components';
import { usePaginatedItemsSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  servizi_offerti: {
    id: 'servizi_offerti',
    defaultMessage: 'Servizi disponibili',
  },
});

const UOServices = ({ content }) => {
  const intl = useIntl();

  const servizi_offerti =
    content.servizi_offerti === undefined || content.servizi_offerti === null
      ? []
      : content.servizi_offerti;
  const { batches, currentPage, onPaginationChange, pageNumbers } =
    usePaginatedItemsSection({ data: servizi_offerti });
    // TO DO: da capire se questa paginazione non serve rimuoviamo questo e il suo helper

  return content?.servizi_offerti?.length > 0 ? (
    <section
      id={'servizi_offerti'}
      className={'it-page-section anchor-offset mb-5 '}
    >
      <h2 id={`header-servizi_offerti`} className="mb-3 h4">
        {intl.formatMessage(messages.servizi_offerti)}
      </h2>
      <Row className="card-wrapper card-teaser-wrapper align-items-stretch">
        {batches?.map((servizio, i) => (
          <Col xs="12" lg="6">
            <Card className="shadow rounded card-big-io-comune p-3 my-3">
              <CardBody>
                <CardCategory date="">{servizio.parent_title}</CardCategory>
                <CardTitle tag="h5">
                  <UniversalLink href={servizio['@id']}>
                    {servizio.title}
                  </UniversalLink>
                </CardTitle>
                <CardText>{servizio.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="pagination-wrapper">
        <Pagination
          activePage={currentPage}
          totalPages={pageNumbers}
          onPageChange={onPaginationChange}
        />
      </div>
    </section>
  ) : null;
};

export default UOServices;
