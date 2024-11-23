import { Component } from "react";

class SubscribeButton extends Component {
  state = {
    message: "Click here",
  };
  render() {
    const { message } = this.state;
    return <button type="button">{message}</button>;
  }
}

export default SubscribeButton;
