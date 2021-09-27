import React, { useState, useEffect } from 'react';
import './Videoreportaj.css';
import 'antd/dist/antd.css'
import ReportajCard from '../reportajCard/ReportajCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { VideoContext } from '../../context/video';


function Videoreportaj() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/videoreportaj')
            .then(res => {
                // console.log(res);
                let posts = res.data.slice(0, 8)
                setPosts(posts)
            })
            .catch(err => {
                console.log(err);

            })
    }, []);

    return (
        <div className="uk-container reportaj-my-style videoreportaj-st">
            <div className="sarlavha reportaj-text-style">видеорепортажлар</div>
            <div className="line-reportaj"></div>

            <div class="uk-grid-column-small uk-grid-row-large uk-child-width-1-4@s uk-text-center uk-grid">

                {posts.map(post => <ReportajCard
                    data={post}
                    numberView={post.numberView}
                    img={post.img}
                    text={post.text}
                />)}

                <Link to="/video"><button class="uk-button uk-button-primary button-mystyle but-rep">барчасини кўриш</button></Link>

            </div>


        </div>
    )
}

export default Videoreportaj;