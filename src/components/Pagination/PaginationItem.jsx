import React from 'react';
import cx from 'classnames';
// import invoke from 'lodash/invoke';
import keyboardKey from 'keyboard-key';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import { PagerItem, PagerLink } from 'design-react-kit';
import { Icon } from 'io-sanita-theme/components';

const messages = defineMessages({
  prevPage: {
    id: 'Previous page',
    defaultMessage: 'Pagina precedente',
  },
  nextPage: {
    id: 'Next page',
    defaultMessage: 'Pagina successiva',
  },
  page: {
    id: 'Page',
    defaultMessage: 'Pagina',
  },
});

/**
 * An item of a pagination.
 */
class PaginationItem extends Component {
  static propTypes = {
    /** A pagination item can be active. */
    active: PropTypes.bool,

    /** A pagination item can be disabled. */
    disabled: PropTypes.bool,

    /**
     * Called on click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,

    /** A pagination should have a type. */
    type: PropTypes.oneOf([
      'ellipsisItem',
      'firstItem',
      'prevItem',
      'pageItem',
      'nextItem',
      'lastItem',
    ]),

    isPrevButtonInactive: PropTypes.bool,
    isForwButtonInactive: PropTypes.bool,
    ariaControls: PropTypes.string,
  };

  handleClick = (e) => {
    this.props.onClick(e, this.props);
  };

  handleKeyDown = (e) => {
    this.props.onKeyDown(e, this.props);
    if (keyboardKey.getCode(e) === keyboardKey.Enter)
      this.props.onClick(e, this.props);
  };

  render() {
    const {
      active,
      type,
      children,
      intl,
      ellipsisItem,
      isPrevButtonInactive,
      isForwButtonInactive,
      ariaControls,
    } = this.props;
    const disabled = this.props.disabled || type === 'ellipsisItem';
    return (
      <PagerItem disabled={disabled}>
        <PagerLink
          href=""
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          aria-current={active ? 'page' : null}
          aria-controls={ariaControls}
        >
          {type === 'prevItem' && (
            <>
              <Icon
                icon="it-chevron-left"
                aria-hidden={true}
                color="primary"
                className={cx({ disabled: isPrevButtonInactive })}
                title={intl.formatMessage(messages.prevPage)}
              />

              <span className="visually-hidden">
                {intl.formatMessage(messages.prevPage)}
              </span>
            </>
          )}
          {type === 'nextItem' && (
            <>
              <Icon
                icon="it-chevron-right"
                aria-hidden={true}
                color="primary"
                className={cx({ disabled: isForwButtonInactive })}
                title={intl.formatMessage(messages.nextPage)}
              />
              <span className="visually-hidden">
                {intl.formatMessage(messages.nextPage)}
              </span>
            </>
          )}
          {type === 'ellipsisItem' && (
            <>
              {ellipsisItem}
              <span className="visually-hidden">
                {intl.formatMessage(messages.nextPage)}
              </span>
            </>
          )}
          {['prevItem', 'nextItem', 'ellipsisItem'].indexOf(type) < 0 && (
            <>
              <span className="visually-hidden">
                {intl.formatMessage(messages.page)}
              </span>{' '}
              {children}
            </>
          )}
        </PagerLink>
      </PagerItem>
    );
  }
}

export default injectIntl(PaginationItem);
