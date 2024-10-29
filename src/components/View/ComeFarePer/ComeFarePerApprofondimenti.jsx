import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { RichTextSection } from 'io-sanita-theme/helpers';
import { CardSimple } from 'io-sanita-theme/components';
/*Componente non previsto da agid, ma utile a costruire i ct ComeFarePer nel caso si vogliano mettere approndimenti per il contenuto (chiesto da AuslFE)*/
const messages = defineMessages({
  approfindimenti: {
    id: 'comefareper_approfondimenti',
    defaultMessage: 'Approfondimenti',
  },
});

const ComeFarePerApprofondimenti = ({ content }) => {
  const intl = useIntl();
  const approfondimenti =
    content?.items?.filter(
      (item) => item['@type'] === 'Document' && item.id != 'allegati',
    ) ?? [];

  return approfondimenti?.length > 0 ? (
    <RichTextSection
      tag_id="approfondimenti"
      title={intl.formatMessage(messages.approfindimenti)}
    >
      <div className="mb-5 mt-3">
        <Row>
          {approfondimenti?.map((item, i) => (
            <Col lg={6} key={'approfindimenti' + i} className="py-lg-2">
              <CardSimple item={item} showCategory={false} titleTag="h3" />
            </Col>
          ))}
        </Row>
      </div>
    </RichTextSection>
  ) : (
    <></>
  );
};

ComeFarePerApprofondimenti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ComeFarePerApprofondimenti;
