import React from 'react';
import './MiddleVideoCard.css'


function MiddleVideoCard(props) {
return(
<div>
        <div className="uk-flex uk-flex-between uk-flex-bottom">
            <div className="sarlavha">Видеолар</div>            
        </div>

        <div uk-lightbox="animation: scale" className="middle-videos big_world_news uk-inline uk-inline-thiscard one_video">
            <img src={props.img} alt="" />
                <div className="uk-overlay uk-overlay-default uk-position-bottom">
                <a href="#">{props.description}</a>
                </div>
            <div class="middle-video_icon">
                <a uk-icon="icon: play-circle" href={props.videoLink} data-caption="Iymon"></a>
            </div>
          </div> 
          {/* <!-- //big_world_news --> */}

</div>
)
}

export default MiddleVideoCard;