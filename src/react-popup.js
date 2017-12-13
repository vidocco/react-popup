import React from 'react';

import './react-popup.scss';

export default class ReactPopUp extends React.Component {

  state = {
    popped: false,
  }

  pop = () => {
    this.setState({popped: !this.state.popped}, () => {
      if (this.state.popped && this.props.onPop && typeof this.props.onPop === 'function') { this.props.onPop(); }
      else if (!this.state.popped && this.props.onUnpop && typeof this.props.onUnpop === 'function') { this.props.onUnpop(); }
      if ((this.props.onPop && typeof this.props.onPop !== 'function') || (this.props.onUnpop && typeof this.props.onUnpop !== 'function')) { console.error('only functions must be used as values for event methods'); }
    });
  }

  render() {
    const styles = {
      overlay: {
        width: `${ this.props.overlay
          ? this.props.overlay.width || '100%'
          : '100%'}`,
        height: `${ this.props.overlay
          ? this.props.overlay.height || '100%'
          : '100%' }`,
        backgroundColor: `${ this.props.overlay
          ? this.props.overlay.backgroundColor || 'rgba(0,0,0,0.4)'
          : 'rgba(0,0,0,0.4)' }`,
        position: 'absolute',
        zIndex: 1,
        ...this.props.overlay,
      },
      popup: {
        width: `${ this.props.popup
          ? this.props.popup.width || '450px'
          : '450px'}`,
        height: `${ this.props.popup
          ? this.props.popup.height || '650px'
          : '650px' }`,
        backgroundColor: `${ this.props.popup
          ? this.props.popup.backgroundColor || 'white'
          : 'white' }`,
        boxShadow: `${ this.props.popup
          ? this.props.popup.boxShadow || '0 0 10px 0 rgba(0, 0, 0, 0.5)'
          : '0 0 10px 0 rgba(0, 0, 0, 0.5)' }`,
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