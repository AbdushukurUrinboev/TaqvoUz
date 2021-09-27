import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MaqolaContext } from '../../context/maqolaCont';
import './MiniCardDolzarb.css';

function MiniCardDolzarb(props, { data }) {
    const [maqola, setMaqola] = useContext(MaqolaContext);
    // const { all } = props;
    return (
        <Link to='/maqola'>
            <div onClick={() => {
                console.log(data);
                console.log(props);
                setMaqola(props.data)
            }} className="uk-container myOwnStyle">
                <img src={props.img} className="image-mystyle" />
                <div className="manual-pos">
                    <p className="sarlavha-manual-minicard man-for-this">{props.title}</p>
                    <p>{props.description}</p>
                    <span className="news_infos-manual">{props.date}</span>
                    <span className="news_infos-manual">{props.numberView}</span>
                </div>
            </div>
        </Link>

    )
}

export default MiniCardDolzarb