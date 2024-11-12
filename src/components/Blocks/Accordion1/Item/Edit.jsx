import React, { useState } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { Button } from 'design-react-kit';
import { SidebarPortal } from '@plone/volto/components';
import ContainerEdit from '@plone/volto/components/manage/Blocks/Container/Edit';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import { setUIState } from '@plone/volto/actions';
import { UniversalLink } from '@plone/volto/components';
import { Icon } from 'io-sanita-theme/components';
import { TextEditorWidget } from 'volto-slate-italia';

const messages = defineMessages({
  titlePlaceholder: {
    id: 'Title placeholder',
    defaultMessage: 'Title...',
  },
  textPlaceholder: {
    id: 'Text placeholder',
    defaultMessage: 'Text...',
  },
  vedi: {
    id: 'Vedi',
    defaultMessage: 'Vedi',
  },
});

const Edit = (props) => {
  const intl = useIntl();
  const { onChangeBlock, selected, data } = props;
  const selectedBlock = useSelector((state) => state.form.ui.gridSelected);
  const dispatch = useDispatch();
  const [focusOn, setFocusOn] = useState('title');

  return (
    <div
      className="accordion-item"
      // This is required to enabling a small "in-between" clickable area
      // for bringing the Grid sidebar alive once you have selected an inner block
      onClick={(e) => {
        if (!e.block) dispatch(setUIState({ gridSelected: null }));
      }}
      role="presentation"
    >
      <h3 className="accordion-header">
        <Button
          color="link"
          tag="button"
          onClick={(e) => {
            if (props.selected) {
              e.stopPropagation();
              e.preventDefault();
              //props.onSubblockChangeFocus(-1);
            }
          }}
        >
          <Icon
            color="primary"
            icon={props.selected ? 'it-minus' : 'it-plus'}
            padding={false}
          />
        </Button>

        {/* eslint-disable */}
        <div
          onClick={() => {
            setFocusOn('title');
          }}
        >
          <TextEditorWidget
            {...props}
            key="title"
            showToolbar={false}
            data={data}
            fieldName="title"
            onChangeBlock={onChangeBlock}
            placeholder={intl.formatMessage(messages.titlePlaceholder)}
            selected={props.selected && focusOn === 'title'}
            setSelected={setFocusOn}
            focusNextField={() => {
              setFocusOn('text');
            }}
            // focusPrevField={
            //   props.isFirst
            //     ? props.onFocusPreviousBlock
            //     : () => {
            //         props.onSubblockChangeFocus(props.index - 1);
            //       }
            // }
          />
        </div>
      </h3>

      {selected && (
        <div
          className="accordion-content open"
          onClick={() => {
            setFocusOn('text');
          }}
        >
          <div className="accordion-inner">
            <ContainerEdit
              {...props}
              selectedBlock={selectedBlock}
              setSelectedBlock={(id) =>
                dispatch(setUIState({ gridSelected: id }))
              }
              direction="vertical"
            />
          </div>
          {data.href && (
            <div className="link-more">
              <UniversalLink href={data.href}>
                {data.linkMoreTitle || intl.formatMessage(messages.vedi)}
                <Icon icon="it-arrow-right" />
              </UniversalLink>
            </div>
          )}
        </div>
      )}

      <SidebarPortal selected={props.selected}>
        <Sidebar {...props} />
      </SidebarPortal>
    </div>
  );
};

export default Edit;
