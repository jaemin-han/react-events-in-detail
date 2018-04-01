// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  // When the button is clicked, we want to persist
  // the event so we can pass it to the this.props.onDelayedClick()
  // in a setTimeout() block. The setTimeout() will be set to this.props.delay.
  handleClick(event) {
    event.persist();
    setTimeout(() => {
      this.props.OnDelayedClick(event);
      }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delayed</button>
    );
  }
}

export default DelayedButton;
