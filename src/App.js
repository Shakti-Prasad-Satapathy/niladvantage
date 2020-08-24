import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import fire from './config/firebase'
import Signup from './Components/Signup'
import DashBord from './Components/DashBord'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.user ? (<DashBord />) : (<Signup />)}
      </div>
    );
  }
}

export default App;
