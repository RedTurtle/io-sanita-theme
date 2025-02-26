/*
 * Link completo
 */
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'design-react-kit';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { isInternalURL } from '@plone/volto/helpers/Url/Url';
import { Icon, LinkMore } from 'io-sanita-theme/components';
import {
  ListingImage,
  ListingContainer,
} from 'io-sanita-theme/components/Blocks';
import { getComponentWithFallback } from 'io-sanita-theme/helpers';

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
              noWrapLink: true,
            });

            const BlockExtraTags = getComponentWithFallback({
              name: 'BlockExtraTags',
              dependencies: ['CompleteBlockLinksTemplate', item['@type']],
            }).component;

            return (
              <Col md="6" lg="3" key={item['@id']} className="col-item">
                <Card className="shadow rounded card-bg no-after">
                  <UniversalLink
                    item={!isEditMode ? item : null}
                    href={isEditMode ? '#' : null}
                    data-element={id_lighthouse}
                    className="item-card-link"
                  >
                    <div className="d-flex">
                      {image && <div className="image-container">{image}</div>}
                      <CardBody>
                        <CardTitle
                          tag="h3"
                          className="d-flex my-0 align-items-center h5"
                        >
                          {item.title}
                          {item['@type'] === 'Link' &&
                            !isInternalURL(
                              item.remoteUrl || item.getRemoteUrl,
                            ) &&
                            config.settings.siteProperties.markSpecialLinks && (
                              <Icon
                                icon="it-external-link"
                                title={title}
                                size="xs"
                                className="ms-1 external-link"
                                aria-hidden={true}
                              />
                            )}
                        </CardTitle>
                        {show_description && (
                          <CardText tag="p">{item.description}</CardText>
                        )}
                        <BlockExtraTags
                          {...props}
                          item={item}
                          itemIndex={index}
                        />
                      </CardBody>
                    </div>
                  </UniversalLink>
                </Card>
              </Col>
            );
          })}
        </Row>
        <LinkMore
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
