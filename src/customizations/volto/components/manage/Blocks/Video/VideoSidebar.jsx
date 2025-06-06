import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { Accordion, Grid, Segment } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import {
  CheckboxWidget,
  TextWidget,
  //ObjectBrowserWidget,
} from '@plone/volto/components/manage/Widgets';
import Icon from 'io-sanita-theme/components/Icon/Icon';
import AlignBlock from '@plone/volto/components/manage/Sidebar/AlignBlock';

import videoSVG from '@plone/volto/icons/videocamera.svg';
import clearSVG from '@plone/volto/icons/clear.svg';
import upSVG from '@plone/volto/icons/up-key.svg';
import downSVG from '@plone/volto/icons/down-key.svg';
import navTreeSVG from '@plone/volto/icons/nav.svg';

import config from '@plone/volto/registry';

const messages = defineMessages({
  LinkTo: {
    id: 'Link to',
    defaultMessage: 'Link to',
  },
  openLinkInNewTab: {
    id: 'Open in a new tab',
    defaultMessage: 'Open in a new tab',
  },
  videoURL: {
    id: 'Video URL',
    defaultMessage: 'Video URL',
  },
  Preview_image: {
    id: 'Preview Image URL',
    defaultMessage: 'Preview Image URL',
  },
  allowExternals: {
    id: 'Allow Externals',
    defaultMessage:
      "Accetta URL esterni per l'embed se diversi da Youtube/Vimeo",
  },
  linkSettings: {
    id: 'video_link settings',
    defaultMessage: 'Impostazioni del link',
  },
});

const VideoSidebar = ({
  data,
  block,
  onChangeBlock,
  openObjectBrowser,
  required = false,
  resetSubmitUrl,
  intl,
}) => {
  const [activeAccIndex, setActiveAccIndex] = useState(0);
  const allowsExternals =
    data.allowExternals !== undefined
      ? !!data.allowExternals
      : !!config.settings.videoAllowExternalsDefault;

  function handleAccClick(e, titleProps) {
    const { index } = titleProps;
    const newIndex = activeAccIndex === index ? -1 : index;

    setActiveAccIndex(newIndex);
  }

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="Video" defaultMessage="Video" />
        </h2>
      </header>

      {!data.url && (
        <>
          <Segment className="sidebar-metadata-container" secondary>
            <FormattedMessage
              id="No video selected"
              defaultMessage="No video selected"
            />
            <Icon name={videoSVG} size="100px" color="#b8c6c8" />
          </Segment>
        </>
      )}
      {data.url && (
        <>
          <Segment className="form sidebar-image-data">
            {data.url && (
              <>
                <TextWidget
                  id="external"
                  title={intl.formatMessage(messages.videoURL)}
                  required={false}
                  value={data.url}
                  icon={clearSVG}
                  iconAction={() => {
                    resetSubmitUrl();
                    onChangeBlock(block, {
                      ...data,
                      url: '',
                    });
                  }}
                  onChange={() => {}}
                />
                {/*
                //sarebbe meglio usare questo ma bisonga migrare tutti i blocchi video esistenti
                <ObjectBrowserWidget
                  id="preview_image"
                  title={intl.formatMessage(messages.Preview_image)}
                  mode="image"
                  return="single"
                  required={false}
                  value={data.preview_image}
                  allowExternals={true}
                  onChange={(id, value) =>
                    onChangeBlock(block, {
                      ...data,
                      [id]: value ?? '',
                    })
                  }
                /> */}
                <TextWidget
                  id="preview-image"
                  title={intl.formatMessage(messages.Preview_image)}
                  required={false}
                  value={data.preview_image?.split('/').slice(-1)[0]}
                  icon={data.preview_image ? clearSVG : navTreeSVG}
                  iconAction={
                    data.preview_image
                      ? () => {
                          onChangeBlock(block, {
                            ...data,
                            preview_image: '',
                          });
                        }
                      : () =>
                          openObjectBrowser({
                            mode: 'image',
                            dataName: 'preview_image',
                          })
                  }
                  onChange={(id, value) => {
                    onChangeBlock(block, {
                      ...data,
                      preview_image: value,
                    });
                  }}
                />
                <CheckboxWidget
                  id="allowExternals"
                  title={intl.formatMessage(messages.allowExternals)}
                  value={allowsExternals}
                  onChange={(_name, value) => {
                    onChangeBlock(block, {
                      ...data,
                      allowExternals: value,
                    });
                  }}
                />
              </>
            )}
            <Form.Field inline required={required}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width="4">
                    <div className="wrapper">
                      <label htmlFor="field-align">
                        <FormattedMessage
                          id="Alignment"
                          defaultMessage="Alignment"
                        />
                      </label>
                    </div>
                  </Grid.Column>
                  <Grid.Column width="8" className="align-tools">
                    <AlignBlock
                      align={data.align}
                      onChangeBlock={onChangeBlock}
                      data={data}
                      block={block}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form.Field>
          </Segment>
          {data.url.match('.mp4') && (
            <Accordion fluid styled className="form">
              <Accordion.Title
                active={activeAccIndex === 0}
                index={0}
                onClick={handleAccClick}
              >
                {intl.formatMessage(messages.linkSettings)}
                {activeAccIndex === 0 ? (
                  <Icon name={upSVG} size="20px" />
                ) : (
                  <Icon name={downSVG} size="20px" />
                )}
              </Accordion.Title>
              <Accordion.Content active={activeAccIndex === 0}>
                <TextWidget
                  id="link"
                  title={intl.formatMessage(messages.LinkTo)}
                  required={false}
                  value={data.href}
                  icon={data.href ? clearSVG : navTreeSVG}
                  iconAction={
                    data.href
                      ? () => {
                          onChangeBlock(block, {
                            ...data,
                            href: '',
                          });
                        }
                      : () => openObjectBrowser({ mode: 'link' })
                  }
                  onChange={(name, value) => {
                    onChangeBlock(block, {
                      ...data,
                      href: value,
                    });
                  }}
                />
                <CheckboxWidget
                  id="openLinkInNewTab"
                  title={intl.formatMessage(messages.openLinkInNewTab)}
                  value={data.openLinkInNewTab ? data.openLinkInNewTab : false}
                  onChange={(name, value) => {
                    onChangeBlock(block, {
                      ...data,
                      openLinkInNewTab: value,
                    });
                  }}
                />
              </Accordion.Content>
            </Accordion>
          )}
        </>
      )}
    </Segment.Group>
  );
};

VideoSidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
  openObjectBrowser: PropTypes.func.isRequired,
  resetSubmitUrl: PropTypes.func.isRequired,
};

export default injectIntl(VideoSidebar);
