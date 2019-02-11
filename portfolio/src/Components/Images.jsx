import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
toggled: false
    }
  }




  render() {
    return (
      
      <div className={this.state.toggled ? "shazam" : "page"}>
    
    <span className="menu_toggle" onClick={()=>this.setState({toggled:!this.state.toggled})}>
  
    {/* <i className={this.state.toggled ?   "menu_close fa fa-times fa-lg" : "menu_open fa fa-bars fa-lg"}></i> */}
    <i className="menu_close fa fa-times fa-lg"></i>
  

  </span>
  <ul className={this.state.toggled ? "menu_items" : "menu"}>
    <li><a href="#"><i className="icon fa fa-signal fa-2x"></i> Portfolio</a></li>
    <li><a href="#"><i className="icon fa fa-heart fa-2x"></i> Contact</a></li>
  </ul>
  <main className="content">
    <div className="content_inner">
    <div className="section-a">
    <h1>About Me </h1>
    <hr/>
    <p>I'm Priya - Front end developer</p>


<span className="smiley-container"><i className="far fa-grin-wink fa-5x"></i></span>
    
  <div className="skills">
    <p>I design and develop amazing websites</p>
    </div>
    </div>
    </div>
  </main>

<Main />
      </div>
    );
  }
}

export default App;
