import React from 'react';
import Front from './Front'

const Flipper = (props)=>{

    return <div className={"flipper-container " + props.orientation}>
      <div className={"flipper" + (props.flipped ? "flipped" : "")}>
<Front className="front">Side</Front>
</div>
    </div>
}



 
 export default Flipper;

