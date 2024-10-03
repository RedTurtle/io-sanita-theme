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
  fa_parte_di: {
    id: 'uo_fa_parte_di',
    defaultMessage: 'Fa parte di',
  },
});

const UOFaParteDi = ({ content }) => {
  const intl = useIntl();

  const parentUO =
    content?.parent['@type'] === 'UnitaOrganizzativa' ? content?.parent : null;

  return parentUO ? (
    <RichTextSection
      tag_id="fa_parte_di"
      title={intl.formatMessage(messages.fa_parte_di)}
    >
      <Row>
        <Col lg={6} className="py-lg-2">
          <CardPlace item={parentUO} type="synthetic" />
        </Col>
      </Row>
    </RichTextSection>
  ) : (
    <></>
  );
};

UOFaParteDi.propTypes = {
  content: PropTypes.object.isRequired,
};

export default UOFaParteDi;
