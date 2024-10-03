/*
  Viene mostrato l'item "genitore" quando l'uo è figlio di un altro uo
*/

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardPlace } from 'io-sanita-theme/components';

const messages = defineMessages({
  uffici_interni: {
    id: 'uo_uffici_interni',
    defaultMessage: 'Servizi o uffici interni',
  },
});

const UOUfficiInterni = ({ content }) => {
  const intl = useIntl();

  const items = (content?.items ?? []).filter(
    (i) => i['@type'] === 'UnitaOrganizzativa',
  );

  return items?.length > 0 ? (
    <RichTextSection
      tag_id="uffici_interni"
      title={intl.formatMessage(messages.uffici_interni)}
    >
      <Row>
        {items.map((item) => (
          <Col lg={6} className="py-lg-2" key={item['@id'] + 'uff_interno'}>
            <CardPlace item={item} type="synthetic" />
          </Col>
        ))}
      </Row>
    </RichTextSection>
  ) : (
    <></>
  );
};

UOUfficiInterni.propTypes = {
  content: PropTypes.object.isRequired,
};

export default UOUfficiInterni;
