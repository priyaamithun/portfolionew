import React from 'react';
import './Nav.css';
class Nav extends React.Component {


    render() { 
        return (
<div className="Navigation">
<input id="burger" type="checkbox" />

<label htmlFor="burger" className="burger">
    <span></span>
    <span></span>
    <span></span>
</label>
<nav className="navbar">
            <ul>
               
                <li><a href="">Home</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Portfolio</a></li>
            </ul>
            </nav>
            </div>
          );
    }
}

export default Nav ;