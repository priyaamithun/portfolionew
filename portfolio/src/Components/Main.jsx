import React from 'react';
import './Main.css';
import 'font-awesome/css/font-awesome.min.css';


class Main extends React.Component {

    render() { 
        return ( 
        <div className="container">

<div className="box">

<div className="thumb">
<img src={require('./calculator.jpg')} alt=""/>
</div>

<div className="detail">
<div className="contentsNew">
<i class="fas fa-calculator"></i>
<h3>React Calculator</h3>
<a href="https://calculator-d0fb2.firebaseapp.com/?fbclid=IwAR3VoVRanHN8H6BI2uuiF1d0u6cLu71XV9Qg0Af2KsvOOUYejqGLxFzqk7g">Click to Open</a>

</div>
</div>

</div>

<div className="box">

<div className="thumb">
<img src={require('./recipes.jpg')} alt=""/>
</div>

<div className="detail">
<div className="contentsNew">
<i class="fas fa-utensils"></i>
<h3>Recipes</h3>
<a href="#">Read More</a>
</div>
</div>

</div>



<div className="box">
<div className="thumb">

<img src={require('./baked.jpg')} alt=""/>
</div>
<div className="detail">
<div className="contentsNew">
<i class="fas fa-birthday-cake"></i>
<h3>Bake More</h3>
<a href="#">Read More</a>

</div>
</div>
</div>


<div className="box">
<div className="thumb">
<img src={require('./weather.jpg')} alt=""/>
</div>
<div className="detail">
<div className="contentsNew">
<i class="fas fa-sun"></i>
<h3>Weather Search</h3>
<a href="#">Read More</a>

</div>
</div>
</div>
   </div> );
    }
}
 
export default Main;