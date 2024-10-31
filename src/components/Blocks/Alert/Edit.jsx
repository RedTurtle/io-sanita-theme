/**
 * Edit Alert block.
 * @module components/manage/Blocks/Image/Edit
 */

import React, { useEffect } from 'react';
import cx from 'classnames';
import { defineMessages, useIntl } from 'react-intl';
import { Row, Col } from 'design-react-kit';
import { TextEditorWidget } from 'volto-slate-italia';

import { SidebarPortal } from '@plone/volto/components';

import { useHandleDetachedBlockFocus } from 'io-sanita-theme/helpers';
import Sidebar from 'io-sanita-theme/components/Blocks/Alert/Sidebar';
import Wrapper from 'io-sanita-theme/components/Blocks/Alert/Wrapper';

const messages = defineMessages({
  content_placeholder: {
    id: 'Type text…',
    defaultMessage: 'Digita il testo…',
  },
});

const Edit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  const intl = useIntl();
  const { selectedField, setSelectedField } = useHandleDetachedBlockFocus(
    props,
    'text',
  );

  return __SERVER__ ? (
    <div />
  ) : (
    <>
      <Wrapper inEditMode={true} data={data}>
        <Row className="align-items-start">
          {data.image?.data && (
            <Col sm={2} className="pb-3 image-col">
              <img
                src={`data:${data.image['content-type']};${data.image.encoding},${data.image.data}`}
                alt=""
                className={cx('left-image', [
                  data.sizeImage ? 'size-' + data.sizeImage : 'size-l',
                ])}
              />
            </Col>
          )}
          <Col>
            <TextEditorWidget
              {...props}
              showToolbar={true}
              data={data}
              fieldName="text"
              selected={selected && selectedField === 'text'}
              setSelected={setSelectedField}
              placeholder={intl.formatMessage(messages.content_placeholder)}
            />
          </Col>
        </Row>
      </Wrapper>
      <SidebarPortal selected={selected}>
        <Sidebar {...props} />
      </SidebarPortal>
    </>
  );
};

export default Edit;
