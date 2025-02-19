/**
 * Edit video block.
 * @module components/manage/Blocks/Title/Edit
 * CUSTOMIZATIONS:
 * - handle url validation and show users errors
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl';
import { Button, Input, Message } from 'semantic-ui-react';
import cx from 'classnames';
import isEqual from 'lodash/isEqual';
import { compose } from 'redux';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import VideoSidebar from '@plone/volto/components/manage/Blocks/Video/VideoSidebar';
import Toast from '@plone/volto/components/manage/Toast/Toast';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import clearSVG from '@plone/volto/icons/clear.svg';
import aheadSVG from '@plone/volto/icons/ahead.svg';
import videoBlockSVG from '@plone/volto/components/manage/Blocks/Video/block-video.svg';

import { checkIfValidVideoLink } from 'io-sanita-theme/helpers';
import Body from './Body.jsx';

import config from '@plone/volto/registry';

const messages = defineMessages({
  VideoFormDescription: {
    id: 'Specify a youtube video or playlist url',
    defaultMessage: 'Specify a youtube video or playlist url',
  },
  VideoBlockInputPlaceholder: {
    id: 'Type a Video (YouTube, Vimeo or mp4) URL',
    defaultMessage: 'Type a Video (YouTube, Vimeo or mp4) URL',
  },
  VideoBlockInvalidLink: {
    id: 'VideoBlockInvalidLink',
    defaultMessage:
      "L'URL fornito è invalido e non può essere processato. Per favore, inserisci un URL valido (YouTube, Vimeo or mp4).",
  },
  error: {
    id: 'Error',
    defaultMessage: 'Error',
  },
});

/**
 * Edit video block class.
 * @class Edit
 * @extends Component
 */
class Edit extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    selected: PropTypes.bool.isRequired,
    block: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    onChangeBlock: PropTypes.func.isRequired,
    onSelectBlock: PropTypes.func.isRequired,
    onDeleteBlock: PropTypes.func.isRequired,
    onFocusPreviousBlock: PropTypes.func.isRequired,
    onFocusNextBlock: PropTypes.func.isRequired,
    handleKeyDown: PropTypes.func.isRequired,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Video block edit
   */
  constructor(props) {
    super(props);

    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onSubmitUrl = this.onSubmitUrl.bind(this);
    this.onKeyDownVariantMenuForm = this.onKeyDownVariantMenuForm.bind(this);
    this.state = {
      url: '',
      error: null,
    };
  }

  /**
   * Change url handler
   * @method onChangeUrl
   * @param {Object} target Target object
   * @returns {undefined}
   */
  onChangeUrl({ target }) {
    this.setState({
      url: target.value,
      error: null,
    });
  }

  /**
   * @param {*} nextProps
   * @returns {boolean}
   * @memberof Edit
   */
  shouldComponentUpdate(nextProps) {
    return (
      this.props.selected ||
      nextProps.selected ||
      !isEqual(this.props.data, nextProps.data)
    );
  }

  /**
   * Submit url handler
   * @method onSubmitUrl
   * @returns {undefined}
   */
  onSubmitUrl() {
    const allowsExternals =
      this.props.data.allowExternals !== undefined
        ? !!this.props.data.allowExternals
        : !!config.settings.videoAllowExternalsDefault;
    if (checkIfValidVideoLink(this.state.url, allowsExternals)) {
      this.props.onChangeBlock(this.props.block, {
        ...this.props.data,
        url: this.state.url,
      });
      if (this.state.error) {
        this.setState({
          error: null,
        });
      }
    } else {
      this.setState({
        error: 'VideoBlockInvalidLink',
      });
      this.props.toastify.toast.error(
        <Toast
          error
          title={this.props.intl.formatMessage(messages.error)}
          content={this.props.intl.formatMessage(
            messages['VideoBlockInvalidLink'],
          )}
        />,
      );
    }
  }

  resetSubmitUrl = () => {
    this.setState({
      url: '',
      error: null,
    });
  };

  /**
   * Keydown handler on Variant Menu Form
   * This is required since the ENTER key is already mapped to a onKeyDown
   * event and needs to be overriden with a child onKeyDown.
   * @method onKeyDownVariantMenuForm
   * @param {Object} e Event object
   * @returns {undefined}
   */
  onKeyDownVariantMenuForm(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      this.onSubmitUrl();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      // TODO: Do something on ESC key
    }
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const { data } = this.props;
    const placeholder =
      this.props.data.placeholder ||
      this.props.intl.formatMessage(messages.VideoBlockInputPlaceholder);
    return (
      <div
        className={cx(
          'block video align',
          {
            selected: this.props.selected,
            center: !Boolean(this.props.data.align),
          },
          this.props.data.align,
        )}
      >
        {data.url ? (
          <Body data={this.props.data} isEditMode={true} />
        ) : (
          <Message>
            <center>
              <img src={videoBlockSVG} alt="" />
              <div className="toolbar-inner">
                <Input
                  onKeyDown={this.onKeyDownVariantMenuForm}
                  onChange={this.onChangeUrl}
                  placeholder={placeholder}
                  value={this.state.url}
                  error={!!this.state.error}
                  // Prevents propagation to the Dropzone and the opening
                  // of the upload browser dialog
                  onClick={(e) => e.stopPropagation()}
                />
                {this.state.url && (
                  <Button.Group>
                    <Button
                      basic
                      className="cancel"
                      onClick={(e) => {
                        e.stopPropagation();
                        this.setState({ url: '' });
                      }}
                    >
                      <Icon name={clearSVG} size="30px" />
                    </Button>
                  </Button.Group>
                )}
                <Button.Group>
                  <Button
                    basic
                    primary
                    onClick={(e) => {
                      e.stopPropagation();
                      this.onSubmitUrl();
                    }}
                  >
                    <Icon name={aheadSVG} size="30px" />
                  </Button>
                </Button.Group>
              </div>
            </center>
          </Message>
        )}
        <SidebarPortal selected={this.props.selected}>
          <VideoSidebar {...this.props} resetSubmitUrl={this.resetSubmitUrl} />
        </SidebarPortal>
      </div>
    );
  }
}

export default compose(injectIntl, injectLazyLibs(['toastify']))(Edit);
