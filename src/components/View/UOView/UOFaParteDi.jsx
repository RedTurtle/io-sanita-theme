/*
  Viene mostrato l'item "genitore" quando l'uo è figlio di un altro uo
*/

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardImage } from 'io-sanita-theme/components';
import { useDispatch, useSelector } from 'react-redux';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { CardPlace } from 'io-sanita-theme/components';

const messages = defineMessages({
  fa_parte_di: {
    id: 'uo_fa_parte_di',
    defaultMessage: 'Fa parte di',
  },
});

const UOFaParteDi = ({ content }) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  // TO DO: rimuovere la chiamata alla fullobject quando il BE passerà tutti i dati dentro a content.parent

  const parentUO =
    content?.parent['@type'] === 'UnitaOrganizzativa' ? content?.parent : null;

  const searchUO = useSelector((state) => state.content?.subrequests);

  // one request is made for parentUO
  useEffect(() => {
    if (parentUO) {
      const url = flattenToAppURL(parentUO['@id']);
      const loaded =
      searchUO?.[url]?.loading || searchUO?.[url]?.loaded;
      if (!loaded) {
        dispatch(getContent(url, null, url));
      }
    }
    return () => {
      if (parentUO) {
        dispatch(resetContent(flattenToAppURL(parentUO['@id'])));
      }
    };
  }, [content]);

  return parentUO ? (
    <RichTextSection
      tag_id="fa_parte_di"
      title={intl.formatMessage(messages.fa_parte_di)}
    >
      <Row>
        <Col lg={6} className="py-lg-2">
          <CardPlace item={parentUO} />
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
