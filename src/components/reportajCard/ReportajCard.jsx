import React, { useContext } from 'react';
import './ReportajCard.css';
import 'antd/dist/antd.css'
import { VideoContext } from '../../context/video';
import { post } from 'jquery';
import { Link } from 'react-router-dom';

function ReportajCard(props) {
    const [video, setVideo] = useContext(VideoContext);
    return (
        <Link to="/video"><div onClick={() => {
            setVideo(props.data)
        }} className="infog-photo-reportaj">
            <div className="uk-card uk-card-default my-card-margin-style">
                <div className="numbers_image-reportaj">{props.numberView}<span uk-icon="image"></span></div>
                <div className="hover-my-style">
                    <img className="myImage" src={props.img} />
                    <div class="overlay-my-style">
                        <div class="hovered-text-reportaj">{props.text}</div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default ReportajCard;