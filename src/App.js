import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  render() {
    const { isLoading } = this.state;
    return <div>{this.state.isLoading ? "Loading..." : "We are ready"}</div>;

    //5분36초까지 들음
  }
}

export default App;
