import React from 'react';
import './Header.css';
import Nav from './Nav';

class Header extends React.Component {
    state = {  }
    render() { 
        return ( 
<div className="header">
<div className="header-img">
<img src={require('./banner.png')} alt=""/>
</div>
    <Nav/>
</div>


         );
    }
}
 
export default Header;