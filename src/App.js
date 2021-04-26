import React, { Component } from "react";
import firebase from "./firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const msg = firebase.messaging();
    msg
      .requestPermission()
      .then(() => {
        return msg.getToken();
      })
      .then((token) => {
        console.log(token);
      })
  }

  render() {
    return <div></div>;
  }
}

export default App;
