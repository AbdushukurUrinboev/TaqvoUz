import React from 'react';
import './MiddleCard.css'

function MiddleCard(props) {
return(
<div>      
        <div className="big_world_news uk-inline uk-inline-thiscard">
            <img src={props.img} alt="" />
                <div className="uk-overlay uk-overlay-default uk-position-bottom">
                <a href="#">{props.description}</a>
                </div>
          </div> 
          {/* <!-- //big_world_news --> */}

</div>
)
}

export default MiddleCard;