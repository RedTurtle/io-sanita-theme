import React from 'react';
import { Container, Card, CardBody } from 'design-react-kit';
const AccordionContainer = ({ data, children }) => {
  return data.show_block_bg ? (
    <div className="public-ui">
      <div className="full-width section section-muted section-inset-shadow py-5">
        <Container className="px-md-4">
          <Card className="card-bg rounded no-after" noWrapper={false} space>
            {data.title && (
              <div className="block-header px-5 pt-4">
                <h2 className="headline mb-0">{data.title}</h2>
              </div>
            )}
            <CardBody className="px-5">{children}</CardBody>
          </Card>
        </Container>
      </div>
    </div>
  ) : (
    <div className="public-ui">
      {data.title && <h2 className="headline">{data.title}</h2>}
      {children}
    </div>
  );
};
export default AccordionContainer;
