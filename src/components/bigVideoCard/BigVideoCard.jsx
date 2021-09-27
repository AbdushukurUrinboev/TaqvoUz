import React from 'react';
import './BigVideoCard.css';


function BigVideoCard(props) {
return (
<div className="uk-width-2-3@m">
    <div className="uk-flex uk-flex-between uk-flex-bottom">
        <div className="sarlavha">{props.title}</div>        
    </div>        
        <div className="news_infos">
            <a href="#">{props.countryName} </a><span>∙ {props.date} ∙ {props.numberView}</span>
        </div>
    <div uk-lightbox="animation: scale" className="big-videos big_our_news uk-inline one_video">
        <img src={props.img} alt="" />        
            <div class="big-video_icon">
                <a uk-icon="icon: play-circle" href={props.videoLink} data-caption="Iymon"></a>
            </div>
    </div> 
     
    <div className="content-page"><p>{props.description}</p></div>
    {/* <!-- //big_world_news --> */}

</div>
)
}

export default BigVideoCard;