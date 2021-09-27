import React from 'react';
import './SavolJavobMiniCard.css'


function SavolJavobMiniCard(props) {
    return (
        <div className="savol-javob-hover">
            <div className="question_text"> <span>Савол: </span> {props.savol}
            </div>
            <div className="read_answer uk-animation-slide-bottom savol-javob-hover"><a href="#">Жавобини ўқинг</a></div>
        </div>
    )
}

export default SavolJavobMiniCard

