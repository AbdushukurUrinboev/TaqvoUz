import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MaqolaContext } from '../../context/maqolaCont';
import './MiniCard.css';


function MiniCard(props) {
    const [maqola, setMaqola] = useContext(MaqolaContext);
    return (
        <Link to="/maqola">
            <div onClick={() => {
                setMaqola(props.data);
            }} className="uk-card uk-flex uk-flex-middle uk-child-width-expand@s mini_world_news uk-grid-collapse uk-margin"
                uk-grid>
                <div className=" uk-cover-container uk-width-auto@l uk-width-1-3@m uk-width-1-3">
                    <img src={props.img} alt="" />
                </div>
                <div className="uk-width-1-2 uk-width-manual">
                    <div className="sarlavha-manual-minicard">{props.title}</div>
                    <div className="news_infos-manual">
                        <a href="/maqola">{props.countryName} </a><span> {props.date} {props.numberView}</span>
                    </div>
                    <div className="uk-card-body">
                        <div className="mini_name">
                            <a href="#">{props.description} </a>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MiniCard;