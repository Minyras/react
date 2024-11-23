/* eslint-disable react/prop-types */

import { Component } from "react";

class Button extends Component {
  handleClick = () => {
    console.log("Button click!");
  };
  render() {
    return (
      <div className="button">
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
// const Button = () => {
//   return (
//     <div className="button">
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// };

export default Button;
