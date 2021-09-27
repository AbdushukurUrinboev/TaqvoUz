import React, {useState, useEffect} from 'react';
import './Fotoreportaj.css';
import 'antd/dist/antd.css'
import ReportajCard from '../reportajCard/ReportajCard';
import axios from 'axios';


function Fotoreportaj() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/fotoreportaj')
            .then(res => {
                // console.log(res);
                let posts = res.data.slice(0,8)
                setPosts(posts)
            })
            .catch(err => {
                console.log(err);

            })
    }, [])

return(
    <div className="uk-container reportaj-my-style">
    <div className="sarlavha reportaj-text-style">фоторепортажлар</div>
    <div className="line-reportaj"></div>

    <div class="uk-grid-column-small uk-grid-row-large uk-child-width-1-4@s uk-text-center uk-grid">
       
            {posts.map(post => <ReportajCard 
            numberView={post.numberView}
            img={post.img}
            text={post.text}            
            />)}
           

            <button class="uk-button uk-button-primary button-mystyle but-rep">барчасини кўриш</button>

    </div>

        
</div>
)
}

export default Fotoreportaj;