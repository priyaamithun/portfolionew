import React from 'react';
import "./AboutMe.css";


const AboutMe = ()=> (

<div className="about">

<img src={require("../Images/profile.jpg")} alt=""/>
<div className="section-b">
<h4>About Me</h4>
<p>
Im a front end developer
I have a passion for programming which i have demonstrated through years of self <br/>study and my initiative
in finding freelance clients as well as creating my own projects.
</p>
<button className="hire AboutMebtn">Hire Me</button>
<button className="download AboutMebtn">Resume</button>
<div className="contact">
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fas fa-envelope"></i></a>
<a href="#"><i className="fab fa-github"></i></a>

</div>
</div>
        </div>
        
          
);

 
export default AboutMe;