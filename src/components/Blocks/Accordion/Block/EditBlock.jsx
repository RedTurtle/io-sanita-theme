/**
 * Edit Accordion block.
 * @module components/ItaliaTheme/Blocks/Accordion/Block/EditBlock
 */

import React from 'react';
import { compose } from 'redux';
import { injectIntl, defineMessages } from 'react-intl';
import { Button } from 'design-react-kit';
import { TextEditorWidget } from 'volto-slate-italia';
import { injectDNDSubblocks, SubblockEdit, Subblock } from 'volto-subblocks';
import { UniversalLink } from '@plone/volto/components';

import { Icon } from 'io-sanita-theme/components';

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
/**
 * Edit Accordion block class.
 * @class Edit
 * @extends Component
 */
class EditBlock extends SubblockEdit {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Accordion Edit
   */
  constructor(props) {
    super(props);
    this.state = {
      focusOn: 'title',
    };
    this.accordion_item_ref = React.createRef();
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    if (__SERVER__) {
      return <div />;
    }

    return (
      <Subblock subblock={this} className="subblock-edit">
        <div ref={this.accordion_item_ref} key={this.props.data.index}>
          <h3 className="accordion-header">
            <Button
              color="link"
              tag="button"
              onClick={(e) => {
                if (this.props.selected) {
                  e.stopPropagation();
                  e.preventDefault();
                  this.props.onSubblockChangeFocus(-1);
                }
              }}
            >
              <Icon
                color="primary"
                icon={this.props.selected ? 'it-minus' : 'it-plus'}
                padding={false}
              />
            </Button>

            {/* eslint-disable */}
            <div
              onClick={() => {
                this.setState({ focusOn: 'title' });
              }}
            >
              <TextEditorWidget
                {...this.props}
                key="title"
                showToolbar={false}
                data={this.props.data}
                fieldName="title"
                onChangeBlock={(block, _data) => {
                  this.onChange(_data);
                }}
                placeholder={this.props.intl.formatMessage(
                  messages.titlePlaceholder,
                )}
                selected={this.props.selected && this.state.focusOn === 'title'}
                setSelected={(f) => {
                  this.setState({
                    focusOn: f,
                  });
                }}
                focusNextField={() => {
                  this.setState({ focusOn: 'text' });
                }}
                focusPrevField={
                  this.props.isFirst
                    ? this.props.onFocusPreviousBlock
                    : () => {
                        this.props.onSubblockChangeFocus(this.props.index - 1);
                      }
                }
              />
            </div>
          </h3>
          {this.props.selected && (
            <div
              className="accordion-content open"
              onClick={() => {
                this.setState({ focusOn: 'text' });
              }}
            >
              <div className="accordion-inner">
                <TextEditorWidget
                  {...this.props}
                  key="text"
                  data={this.props.data}
                  fieldName="text"
                  selected={
                    this.props.selected && this.state.focusOn === 'text'
                  }
                  placeholder={this.props.intl.formatMessage(
                    messages.textPlaceholder,
                  )}
                  onChangeBlock={(block, _data) => {
                    this.onChange(_data);
                  }}
                  setSelected={(f) => this.setState({ focusOn: f })}
                  focusNextField={
                    !this.props.isLast
                      ? () => {
                          this.setState({
                            focusOn: null,
                            subIndexSelected: this.props.index + 1,
                          });
                        }
                      : null //default go to next block
                  }
                  focusPrevField={() => {
                    this.setState({ focusOn: 'title' });
                  }}
                />
              </div>
              {this.props.data.href && (
                <div className="link-more">
                  <UniversalLink href={this.props.data.href}>
                    {this.props.data.linkMoreTitle ||
                      this.props.intl.formatMessage(messages.vedi)}
                    <Icon icon="it-arrow-right" />
                  </UniversalLink>
                </div>
              )}
            </div>
          )}
        </div>
        {/* eslint-enable */}
      </Subblock>
    );
  }
}

export default compose(injectIntl, injectDNDSubblocks)(EditBlock);
