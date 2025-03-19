import React from 'react';
import { Container, Card, CardBody } from 'design-react-kit';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';

const AccordionContainer = ({ data, headerChildren, children }) => {
  return data.show_block_bg ? (
    <div className="public-ui">
      <div className="full-width section section-muted section-inset-shadow py-5">
        <Container className="px-md-4">
          <Card className="card-bg rounded no-after" noWrapper={false}>
            {(data.title || data.description || headerChildren) && (
              <div className="block-header">
                {headerChildren ?? (
                  <>
                    <h2 className="headline mb-0">{data.title}</h2>
                    {data.description && (
                      <div className="description">
                        <TextBlockView data={{ value: data.description }} />
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
            <CardBody>{children}</CardBody>
          </Card>
        </Container>
      </div>
    </div>
  ) : (
    <div className="public-ui">
      {(data.title || data.description || headerChildren) && (
        <div className="block-header">
          {headerChildren ?? (
            <>
              {data.title && <h2 className="headline">{data.title}</h2>}
              {data.description && (
                <div className="description">
                  <TextBlockView data={{ value: data.description }} />
                </div>
              )}
            </>
          )}
        </div>
      )}
      {children}
    </div>
  );
};
export default AccordionContainer;
