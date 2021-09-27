import React from 'react';
import { useContext } from 'react';
import { VideoContext } from '../../context/video';
import './MiniVideoCard.css';


function MiniVideoCard(props) {
    const [video, setVideo] = useContext(VideoContext);
    return (

        <div onClick={() => {
            setVideo(props.data)
        }} className="videos uk-card uk-flex uk-flex-middle uk-child-width-expand@s mini_world_news uk-grid-collapse uk-margin" uk-grid>
            <div uk-lightbox="animation: scale" className=" uk-cover-container uk-width-auto@l uk-width-1-3@m uk-width-1-3 one_video">
                <img src={props.img} alt="" />
            </div>
            <div className="uk-width-1-2">
                <div className="uk-card-body">
                    <div className="mini_name">
                        <a href="#">{props.description} </a>
                    </div>
                    <div class="video_icon">
                        <a uk-icon="icon: play-circle" href={props.videoLink} data-caption="Iymon"></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MiniVideoCard;