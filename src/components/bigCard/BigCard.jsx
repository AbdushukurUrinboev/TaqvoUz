import React from 'react';
import './BigCard.css';


function BigCard(props) {
return (
<div className="uk-width-2-3@m">
    <div className="uk-flex uk-flex-between uk-flex-bottom">
        <div className="sarlavha">{props.title}</div>        
    </div>        
        <div className="news_infos">
            <a href="#">{props.countryName} </a><span>∙ {props.date} ∙ {props.numberView}</span>
        </div>
    <div className="big_our_news uk-inline">
        <img src={props.img} alt="" />        
    </div> 
    <div className="content-page"><p>{props.description}</p></div>
    {/* <!-- //big_world_news --> */}

</div>
)
}

export default BigCard;