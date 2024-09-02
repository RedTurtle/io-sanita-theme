import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'design-react-kit';
import {
  RichTextSection,
  contentFolderHasItems,
} from 'io-sanita-theme/helpers';

import {
  CardSimple,
  CardImage,
  CardPlace,
  CardPersona,
} from 'io-sanita-theme/components';

const BackReferences = ({ id, title, content, type }) => {
  const backreferences =
    content?.['@components']?.['back-references']?.[type] ?? [];

  const renderItem = (item, i) => {
    switch (item['@type']) {
      case 'News Item':
        return <CardImage item={item} key={item['@id'] + i} />;
        break;
      case 'Struttura':
        return <CardPlace item={item} key={item['@id'] + i} />;
        break;
      case 'Persona':
        return <CardPersona item={item} key={item['@id'] + i} />;
        break;
      default:
        return <CardSimple item={item} key={item['@id'] + i} />;
    }
  };
  const renderedBackreferences = (
    <Row>
      {backreferences.map((b, i) => (
        <Col lg={6} className="py-2">
          {renderItem(b, i)}
        </Col>
      ))}
    </Row>
  );
  return backreferences.length > 0 ? (
    <>
      {title && id ? (
        <RichTextSection tag_id={id} title={title}>
          {renderedBackreferences}
        </RichTextSection>
      ) : (
        <>{renderedBackreferences}</>
      )}
    </>
  ) : (
    <></>
  );
};

BackReferences.propTypes = {
  content: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['news', 'documenti', 'responsabile', 'personale']),
};

export default BackReferences;
