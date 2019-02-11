import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';

class App extends Component {
  constructor(props){
    super(props);
 
  }
  render() {
    return (
      <div className="page" id="main">
         <Header />

      <AboutMe/>

  

  <Main />

    </div>
    );
  }
}

export default App;
