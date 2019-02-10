import React from 'react';
import "./Header.css";
class Header extends React.Component {
  
    render(){
return(
        <div>
<div className="menu-things">
<ul className="list-items">
    <li>menu</li>
    <li>about</li>
    <li>contact</li>

</ul>
</div>
        </div>
          );
    }
}
 
export default Header;