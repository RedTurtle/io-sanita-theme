import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { defineMessages, useIntl } from 'react-intl';
import { Button, Container } from 'design-react-kit';

import { TextEditorWidget } from 'volto-slate-italia';
import { UniversalLink, Icon as VoltoIcon } from '@plone/volto/components';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';

import { useHandleDetachedBlockFocus } from 'io-sanita-theme/helpers';
import config from '@plone/volto/registry';
import defaultImage1 from 'io-sanita-theme/icons/default-bg-1.svg';
import defaultImage2 from 'io-sanita-theme/icons/default-bg-2.svg';

const messages = defineMessages({
  cta_title: {
    id: 'Type the title…',
    defaultMessage: 'Type the title…',
  },
  cta_content: {
    id: 'Type description…',
    defaultMessage: 'Digita la descrizione…',
  },
  openLinkInNewTab: {
    id: 'openLinkInNewTab',
    defaultMessage: 'Apri link in una nuova scheda',
  },
});

const Block = (props) => {
  const { data, block, inEditMode, selected, ...otherProps } = props;
  const intl = useIntl();
  const Image = config.getComponent({ name: 'Image' }).component;
  const title = data?.cta_title;
  const hasDefaultImage = data?.defaultImage?.length > 1;
  const hasImage = data?.ctaImage?.length > 0 || hasDefaultImage; //&& data?.showImage &&

  const content = data?.cta_content;
  const fullWidth = data?.showFullWidth;
  const bg_color = data['bg:noprefix'];

  const { selectedField, setSelectedField } = useHandleDetachedBlockFocus(
    props,
    'cta_title',
  );

  return (
    <div
      className={cx('cta-block-wrapper', bg_color, {
        'has-image': hasImage,
        'has-default-image': hasDefaultImage,
        'full-width': fullWidth,
      })}
    >
      {hasImage && (
        <figure className="img-wrapper">
          {data.ctaImage?.length > 0 ? (
            <Image
              item={data.ctaImage[0]}
              sizes="100vw"
              loading="lazy"
              responsive={true}
              alt=""
              aria-hidden="true"
              role="presentation"
              key={data.ctaImage[0]['@id']}
            />
          ) : (
            <>
              <VoltoIcon
                className="me-2 icon-sm icon-svg-telephone"
                name={
                  data.defaultImage == 'default-1'
                    ? defaultImage1
                    : defaultImage2
                }
                loading="lazy"
                responsive={true}
                alt=""
                aria-hidden="true"
                role="presentation"
              />
              {/* <img
                src={
                  data.defaultImage == 'default-1'
                    ? defaultImage1
                    : defaultImage2
                }
                loading="lazy"
                responsive={true}
                alt=""
                aria-hidden="true"
                role="presentation"
              /> */}
            </>
          )}
        </figure>
      )}
      <Container tag="div" className="px-3 px-md-4 text-container">
        <div className="cta-tile-text">
          <h2 className="title mt-0" id={block + 'title'}>
            {inEditMode ? (
              <TextEditorWidget
                {...otherProps}
                showToolbar={false}
                data={data}
                block={block}
                fieldName="cta_title"
                selected={selected && selectedField === 'cta_title'}
                setSelected={setSelectedField}
                placeholder={intl.formatMessage(messages.cta_title)}
                focusNextField={() => {
                  setSelectedField('cta_content');
                }}
              />
            ) : (
              title
            )}
          </h2>

          {inEditMode ? (
            <TextEditorWidget
              {...otherProps}
              showToolbar={true}
              data={data}
              fieldName="cta_content"
              block={block}
              selected={selected && selectedField === 'cta_content'}
              setSelected={setSelectedField}
              placeholder={intl.formatMessage(messages.cta_content)}
              focusPrevField={() => {
                setSelectedField('cta_title');
              }}
            />
          ) : (
            <TextBlockView data={{ value: content }} />
          )}
          {data.ctaLink?.length > 0 && data.ctaLinkTitle?.length > 0 && (
            <div className="mt-5">
              <Button
                color={bg_color == 'bg-primary-dark' ? 'accent' : 'primary'}
                className={bg_color == 'bg-primary-dark' ? 'inverted' : ''}
                icon={false}
                size="lg"
                tag={UniversalLink}
                disabled={inEditMode}
                href={data.ctaLink}
                openLinkInNewTab={!!data.openLinkInNewTab}
                title={
                  !!data.openLinkInNewTab
                    ? intl.formatMessage(messages.openLinkInNewTab)
                    : null
                }
              >
                {data.ctaLinkTitle}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

Block.propTypes = {
  entityMap: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.any,
};

export default Block;
