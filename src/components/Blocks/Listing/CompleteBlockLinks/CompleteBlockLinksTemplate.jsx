/*
 * Blocco link completo
 */
import PropTypes from 'prop-types';
import { UniversalLink } from '@plone/volto/components';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'design-react-kit';
import {
  ListingLinkMore,
  ListingImage,
  ListingContainer,
} from 'io-sanita-theme/components/Blocks';
import { Icon } from 'io-sanita-theme/components';
import { getComponentWithFallback } from 'io-sanita-theme/helpers';
import { isInternalURL } from '@plone/volto/helpers/Url/Url';

import './completeBlockLinksTemplate.scss';

import config from '@plone/volto/registry';

const CompleteBlockLinksTemplate = (props) => {
  const {
    items,
    title,
    isEditMode,
    linkAlign,
    linkTitle,
    linkHref,
    // show_block_bg,
    show_description = true,
    id_lighthouse,
    linkmore_id_lighthouse,
  } = props;
  return (
    <div className="complete-block-links-template">
      <ListingContainer data={props} isEditMode={isEditMode}>
        <Row className="items">
          {items.map((item, index) => {
            const image = ListingImage({
              item,
              className: '',
              sizes: '60px',
              showTitleAttr: false,
              alt: item.title,
            });

            const BlockExtraTags = getComponentWithFallback({
              name: 'BlockExtraTags',
              dependencies: ['CompleteBlockLinksTemplate', item['@type']],
            }).component;

            return (
              <Col md="6" lg="3" key={item['@id']} className="col-item">
                <Card
                  color=""
                  className="card-bg rounded"
                  noWrapper={false}
                  tag="div"
                >
                  <UniversalLink
                    item={!isEditMode ? item : null}
                    href={isEditMode ? '#' : null}
                    data-element={id_lighthouse}
                    className={'no-external-if-link'}
                  >
                    <div className="d-flex">
                      {image && <div className="image-container">{image}</div>}
                      <div>
                        <CardBody>
                          <CardTitle tag="h3" className="text-contrast-accent">
                            {item.title}
                            {item['@type'] === 'Link' &&
                              !isInternalURL(
                                item.remoteUrl || item.getRemoteUrl,
                              ) &&
                              config.settings.siteProperties
                                .markSpecialLinks && (
                                <Icon
                                  icon="it-external-link"
                                  title={title}
                                  size="xs"
                                  className="ms-1 align-sub external-link"
                                />
                              )}
                          </CardTitle>
                          {show_description && (
                            <CardText tag="p" className="text-secondary">
                              {item.description}
                            </CardText>
                          )}
                          <BlockExtraTags
                            {...props}
                            item={item}
                            itemIndex={index}
                          />
                        </CardBody>
                      </div>
                    </div>
                  </UniversalLink>
                </Card>
              </Col>
            );
          })}
        </Row>
        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-4"
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </ListingContainer>
    </div>
  );
};

CompleteBlockLinksTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CompleteBlockLinksTemplate;
