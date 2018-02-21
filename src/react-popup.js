import React from 'react';
import PropTypes from 'prop-types';

import './react-popup.css';

/**
 * PropTypes definition of the props for ReactPopup. Will render the warnings
 * in the console of the type of the passed props doesn't match the defined
 * PropType.
 */

const propTypes = {
  onPop: PropTypes.func,
  onUnpop: PropTypes.func,
  overlay: PropTypes.object,
  popup: PropTypes.object,
  button: PropTypes.object,
  children: PropTypes.node,
  buttonText: PropTypes.string,
}

/**
 * A react component that renders a button on the DOM that, when clicked, will display a
 * modal/popup on top of the contents of the current page. The modal will disappear when
 * clicking on the outside of the modal.
 *
 * @prop { function } onPop function to be executed when the modal appears.
 * @prop { function } onUnpop function to be executed when the modal disappears.
 * @prop { object } overlay react styles object containing styles for the background overlay.
 * @prop { object } popup react styles object containing styles for the modal.
 * @prop { object } button react styles object containing styles for the button.
 * @prop { string } buttonText text to be displayed in the button.
 * @prop { node } children contents of the modal.
 */
export default class ReactPopUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      popped: false,
    }
  }

  /**
   * Function that controls the state of the modal, switching its state between
   * popped and hidden, and executes the onPop and onUnpop functions (if either of
   * them exist).
   */
  pop = () => {
    this.setState({popped: !this.state.popped}, () => {
      if (this.state.popped && this.props.onPop) this.props.onPop();
      else if (!this.state.popped && this.props.onUnpop) this.props.onUnpop();
    });
  }

  render() {
    /**
     * Mapping the passed styles (if they have been defined in their corresponding
     * props) and/or setting the styles to their default values (if they don't).
     */
    const styles = {
      overlay: {
        width: `${ (this.props.overlay && this.props.overlay.width) || '100%'}`,
        height: `${ (this.props.overlay && this.props.overlay.height) || '100%' }`,
        backgroundColor: `${ (this.props.overlay && this.props.overlay.backgroundColor) || 'rgba(0,0,0,0.4)' }`,
        position: 'absolute',
        zIndex: 1,
        ...this.props.overlay,
      },
      popup: {
        width: `${ (this.props.popup && this.props.popup.width) || '450px'}`,
        height: `${ (this.props.popup && this.props.popup.height) || '650px' }`,
        backgroundColor: `${ (this.props.popup && this.props.popup.backgroundColor) || 'white' }`,
        boxShadow: `${ (this.props.popup && this.props.popup.boxShadow) || '0 0 10px 0 rgba(0, 0, 0, 0.5)' }`,
        position: 'absolute',
        zIndex: 2,
        ...this.props.popup,
      },
      button: {
        ...this.props.button,
      },
    };
    return (
      <div className="react-popup" style={{ zIndex: -1 }}>
        {this.state.popped
          ? (
            <div className="popup-display">
              <div
                style={styles.overlay}
                onClick={this.pop}
                className="popup-overlay"
              >
              </div>
              <div className="popup" style={styles.popup}>
                {this.props.children}
              </div>
            </div>
          ) : (
            null
          )}
        <input style={{zIndex: -1, ...styles.button}} type="button" onClick={this.pop} value={this.props.buttonText || 'show'} />
      </div>
    );
  }
}

ReactPopUp.propTypes = propTypes;