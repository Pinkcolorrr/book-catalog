import "./App.css";
import React from "react";
import Menu from "./Menu/Menu";
import Content from "./Content/Content";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "./UserContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasUser: false,
    };
  }

  componentDidMount = () => {
    this.authListener();
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  authListener = () => {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          hasUser: true,
        });
      } else {
        this.setState({
          hasUser: false,
        });
      }
    });
  };

  render() {
    return (
      <UserContext.Provider value={this.state.hasUser}>
        <div className="wrapper">
          <Menu></Menu>
          <Content></Content>
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
