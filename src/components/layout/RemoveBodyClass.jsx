import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import withSideEffect from 'react-side-effect';

/**
 * @export
 * @class RemoveBodyClass
 * @extends {Component}
 */
class RemoveBodyClass extends Component {
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    if (this.props.children) {
      return Children.only(this.props.children);
    }
    return null;
  }
}

RemoveBodyClass.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};

RemoveBodyClass.defaultProps = {
  children: null,
  className: null,
};

/**
 * reducePropsToState
 * @function reducePropsToState
 * @param {*} propsList propsList
 * @returns {List} classList
 */
function reducePropsToState(propsList) {
  let classList = [];
  propsList.forEach((props) => {
    if (props.className) {
      classList = classList.concat(props.className);
    }
  });
  return classList;
}

/**
 * handleStateChangeOnClient
 * @function handleStateChangeOnClient
 * @param {*} classList classList
 * @returns {null} null
 */
function handleStateChangeOnClient(classList) {
  console.log('rremove', classList);
  classList.forEach((c) => {
    if (c.indexOf(' ') > 0) {
      c.split(' ').forEach((cc) => document.body.classList.remove(cc));
    } else {
      document.body.classList.remove(c);
    }
  });
}

export default withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient,
)(RemoveBodyClass);
