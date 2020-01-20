import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true
  };
  render() {
    const { isLoading } = this.state;
    return <div>{this.state.isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
