import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardPlace } from 'io-sanita-theme/components';
import { Row, Col } from 'design-react-kit';

const messages = defineMessages({
  responsabile: {
    id: 'documento_responsabile',
    defaultMessage: 'Responsabile',
  },
});

const DocumentoResponsabile = ({ content }) => {
  const intl = useIntl();

  return content?.uo_correlata?.length > 0 ? (
      <RichTextSection
        tag_id="responsabile"
        title={intl.formatMessage(messages.responsabile)}
      >
        <Row>
          {content.uo_correlata.map((item) => {
            return (
              <Col lg={6} className="py-lg-2" key={item['@id']}>
                <CardPlace item={item} />
              </Col>
            );
          })}
        </Row>
      </RichTextSection>
  ) : (
    <></>
  );
};

export default DocumentoResponsabile;
