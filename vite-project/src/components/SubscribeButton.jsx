import { Component } from "react";

class SubscribeButton extends Component {
  state = {
    text: "Click here",
    clicked: false,
  };
  handleClick = () => {
    this.clicked = !this.clicked;
    this.setState({ text: "clicked" });
  };
  render() {
    const { text } = this.state;
    return (
      <button
        className={this.clicked ? "active" : ""}
        onClick={this.handleClick}
        type="button"
      >
        {text}
      </button>
    );
  }
}

export default SubscribeButton;
