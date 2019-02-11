import React from 'react';
import './Header.css';
import Nav from './Nav';

class Header extends React.Component {
    state = {  }
    render() { 
        return ( 
<div className="header">
<img src={require('./banner.png')} alt=""/>

    <Nav/>
</div>


         );
    }
}
 
export default Header;