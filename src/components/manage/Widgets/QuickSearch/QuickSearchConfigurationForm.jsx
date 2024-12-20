import React, { useEffect } from 'react';
import { compose } from 'redux';
import { defineMessages, useIntl } from 'react-intl';
import { Form, Grid, Button } from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import withObjectBrowser from '@plone/volto/components/manage/Sidebar/ObjectBrowser';
import { TextWidget } from '@plone/volto/components';
import navTreeSVG from '@plone/volto/icons/nav.svg';
import clearSVG from '@plone/volto/icons/clear.svg';

const messages = defineMessages({
  title: {
    id: 'quicksearchwidget-title',
    defaultMessage: 'Titolo',
  },
  deleteButton: {
    id: 'quicksearchwidget-deleteitem-button',
    defaultMessage: 'Rimuovi',
  },
});

const QuickSearchConfigurationForm = ({
  id,
  item,
  onChange,
  deleteItem,
  openObjectBrowser,
}) => {
  const intl = useIntl();

  const preventClick = (e) => {
    e.preventDefault();
  };

  const preventEnter = (e) => {
    if (e.code === 'Enter') {
      preventClick(e);
    }
  };

  useEffect(() => {
    document
      .querySelector('form.ui.form')
      ?.addEventListener('click', preventClick);

    document.querySelectorAll('form.ui.form input').forEach((item) => {
      item.addEventListener('keypress', preventEnter);
    });

    return () => {
      document
        .querySelector('form.ui.form')
        ?.removeEventListener('click', preventClick);
      document.querySelectorAll('form.ui.form input').forEach((item) => {
        item.removeEventListener('keypress', preventEnter);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeFormData = (id, value) => {
    onChange({ ...item, [id]: value });
  };

  //const url = item.linkUrl?.[0]?.['@id'] ?? item.href ?? null;

  return (
    <>
      <TextWidget
        id={`${id}-title`}
        title={intl.formatMessage(messages.title)}
        description=""
        required={true}
        value={item.title}
        onChange={(id, value) => onChangeFormData('title', value)}
      />

      {/* <TextWidget
        id={`${id}-linkUrl`}
        title={intl.formatMessage(messages.linkUrl)}
        description={intl.formatMessage(messages.linkUrl_description)}
        required={true}
        value={url ? flattenToAppURL(url) : null}
        icon={url ? clearSVG : navTreeSVG}
        iconAction={
          url
            ? () => {
                onChangeFormData('linkUrl', '');
              }
            : () =>
                openObjectBrowser({
                  mode: 'link',
                  onSelectItem: (url, item) => {
                    onChangeFormData('linkUrl', [item]);
                  },
                })
        }
        onChange={(id, value) => onChangeFormData('href', value)}
      /> */}

      <Form.Field inline className="delete wide" id="item-delete">
        <Grid>
          <Grid.Row>
            <Grid.Column width={12} textAlign="center">
              <Button
                icon="trash"
                size="mini"
                onClick={deleteItem}
                id="delete-item"
                negative
                content={intl.formatMessage(messages.deleteButton)}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form.Field>
    </>
  );
};

export default React.memo(
  compose(withObjectBrowser)(QuickSearchConfigurationForm),
);
