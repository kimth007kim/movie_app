import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  }; //바뀔숫자를 데이터에다가 넣음
  add = () => {
    this.setState(current => ({ count: this.state.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: this.state.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
