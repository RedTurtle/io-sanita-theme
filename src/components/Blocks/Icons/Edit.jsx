/**
 * Edit icons block.
 * @module components/ItaliaTheme/Blocks/Accordion/Edit
 */

import React from 'react';
import cx from 'classnames';
import { defineMessages } from 'react-intl';
import { Container, Row, Col } from 'design-react-kit';

import { SidebarPortal } from '@plone/volto/components';
import { handleKeyDownOwnFocusManagement } from 'io-sanita-theme/helpers';
import {
  withDNDContext,
  SubblocksEdit,
  SubblocksWrapper,
} from 'volto-subblocks';
import { TextEditorWidget } from 'volto-slate-italia';
import EditBlock from './Block/EditBlock';
import Sidebar from './Sidebar.jsx';

import MoreButton from './MoreButton';
import Background from './Background';

import './icons.scss';

const messages = defineMessages({
  addItem: {
    id: 'Add icons item',
    defaultMessage: 'Aggiungi elemento',
  },
  title: {
    id: 'Title',
    defaultMessage: 'Titolo...',
  },
  description: {
    id: 'Description placeholder',
    defaultMessage: 'Descrizione...',
  },
});
/**
 * Edit Accordion block class.
 * @class Edit
 * @extends Component
 */
class Edit extends SubblocksEdit {
  constructor(props) {
    super(props);
    this.state.selectedField = 'title';
    this.nodeF = React.createRef();
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.selected) {
      if (!this.props.selected) {
        this.setState({ selectedField: 'title' });
      }
    } else {
      this.setState({ selectedField: null });
    }
  }

  handleEnter = (e) => {
    if (
      this.props.selected &&
      this.state.subIndexSelected < 0 &&
      !this.state.selectedField
    ) {
      handleKeyDownOwnFocusManagement(e, this.props);
    }
  };

  handleClick = (e) => {
    const hasParent = (element, className) => {
      if (!element.parentNode) {
        return false;
      }

      if (element.classList.contains(className)) {
        return true;
      }

      return hasParent(element.parentNode, className);
    };
    const clickOutsideSubblocks =
      !e.target.classList.contains('volto-subblocks-wrapper') &&
      !hasParent(e.target, 'volto-subblocks-wrapper');

    if (clickOutsideSubblocks) {
      this.setState({ subIndexSelected: -1 });
    }
  };

  componentDidMount() {
    if (this.props.selected && this.node) {
      this.node.focus();
    }
    if (this.props.selected && this.nodeF.current) {
      this.nodeF.current.focus();
    }

    if (this.state.subblocks.length === 0) {
      this.addSubblock();
    }

    if (this.nodeF && this.nodeF.current) {
      this.nodeF.current.addEventListener('keydown', this.handleEnter, false);
      this.nodeF.current.addEventListener('click', this.handleClick, false);
    }
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
      <div className="public-ui" tabIndex="-1" ref={this.nodeF}>
        <div
          className={cx('full-width section py-5 icons-block-wrapper', {
            [this.props.data.bg_color]: this.props.data.bg_color,
          })}
        >
          <Background data={this.props.data} isEditMode={true} />

          <Container className="px-md-4">
            <div className="block-header text-center">
              <h2 className="title">
                <TextEditorWidget
                  {...this.props}
                  showToolbar={false}
                  data={this.props.data}
                  key={'title'}
                  fieldName="title"
                  selected={this.state.selectedField === 'title'}
                  setSelected={(f) => {
                    this.setState({
                      selectedField: f,
                      subIndexSelected: -1,
                    });
                  }}
                  placeholder={this.props.intl.formatMessage(messages.title)}
                  focusNextField={() => {
                    this.setState({ selectedField: 'description' });
                  }}
                />
              </h2>

              <div className="description">
                <TextEditorWidget
                  {...this.props}
                  showToolbar={true}
                  data={this.props.data}
                  fieldName="description"
                  selected={this.state.selectedField === 'description'}
                  setSelected={(f) => {
                    this.setState({
                      selectedField: f,
                      subIndexSelected: -1,
                    });
                  }}
                  placeholder={this.props.intl.formatMessage(
                    messages.description,
                  )}
                  focusPrevField={() => {
                    this.setState({ selectedField: 'title' });
                  }}
                  focusNextField={() => {
                    this.setState({ selectedField: null, subIndexSelected: 0 });
                  }}
                />
              </div>
            </div>
            <SubblocksWrapper node={this.node}>
              <Row className={cx({ center: this.props.data.alignCards })}>
                {this.state.subblocks.map((subblock, subindex) => (
                  <Col lg="4" xl="3" key={subblock.id} className="mb-3">
                    <EditBlock
                      {...this.props}
                      blockHasTitle={this.props.data.title?.length > 0}
                      data={subblock}
                      index={subindex}
                      blockIndex={this.props.index}
                      selected={this.isSubblockSelected(subindex)}
                      {...this.subblockProps}
                      onChangeFocus={this.onSubblockChangeFocus}
                      isFirst={subindex === 0}
                      isLast={subindex === this.state.subblocks?.length - 1}
                      openObjectBrowser={this.props.openObjectBrowser}
                      onFocusPreviousBlock={() => {
                        this.setState({ selectedField: 'description' });
                      }}
                    />
                  </Col>
                ))}

                {this.props.selected && (
                  <Col md={3}>
                    {this.renderAddBlockButton(
                      this.props.intl.formatMessage(messages.addItem),
                    )}
                  </Col>
                )}
              </Row>
            </SubblocksWrapper>
            <MoreButton data={this.props.data} isEditMode={true} />
            <SidebarPortal selected={this.props.selected || false}>
              <Sidebar
                {...this.props}
                onChangeSubBlock={this.onChangeSubblocks}
                selected={this.state.subIndexSelected}
                setSelected={this.onSubblockChangeFocus}
              />
            </SidebarPortal>
          </Container>
        </div>
      </div>
    );
  }
}

export default React.memo(withDNDContext(Edit));
