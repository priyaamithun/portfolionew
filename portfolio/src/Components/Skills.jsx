import React from 'react';
import './Skills.css';



const Skills =() =>(
  <div id="skills">

<div className="title">
  <div>React</div>
  <div>HTML & CSS </div>
  <div>Javascript</div>
  <div>Java</div>
  <div>Github</div>
  <div>Sass</div>
  <div>Jquery</div>
</div>

<div className="skill-container">
<div class="containers">
  <div class="skills react skillbar-background">60%</div>
</div>

<div class="containers">

  <div class="skills css skillbar-background">70%</div>
</div>

<div class="containers">
  <div class="skills js skillbar-background">65%</div>
</div>

<div class="containers">
<div class="skills java skillbar-background">60%</div>
</div>


<div class="containers">
  <div class="skills git skillbar-background">60%</div>
</div>


<div class="containers">
<div class="skills sass skillbar-background">60%</div>
</div>


<div class="containers">
<div class="skills jq skillbar-background">60%</div>
</div>
</div>
</div>
);
export default Skills;