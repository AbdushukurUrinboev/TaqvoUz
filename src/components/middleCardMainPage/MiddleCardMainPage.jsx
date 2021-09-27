import React, { useContext, useEffect, useState } from 'react';
import './MiddleCardMainPage.css'
import MiniCardDolzarb from '../miniCardDolzarb/MiniCardDolzarb';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MaqolaContext } from '../../context/maqolaCont';


function MiddleCardMainPage() {
    const [posts, setPosts] = useState([]);
    const [maqola, setMaqola] = useContext(MaqolaContext)


    useEffect(() => {
        axios.get('http://localhost:4000/maqolalar')
            .then(res => {
                // console.log(res);
                let posts = res.data.slice(0, 3)
                setPosts(posts)
            })
            .catch(err => {
                console.log(err);

            })
    }, [])



    return (
        <div className="uk-container uk-container-small container-margin-manual">
            <div className="uk-flex uk-flex-center">
                <div className="uk-card uk-card-default uk-card-body uk-card-mystyle width-only-this">
                    <div className="sarlavha sarlavha-man">сўнги мақолалар</div>
                    <div className="line-mystyle"></div>
                    <div className="uk-column-1-2">
                        <div className="change-your-st">
                            {posts.map((post, id) =>
                                <MiniCardDolzarb key={id} data={post} img={post.img} />)
                            }
                        </div>
                        <div className="own-style-st">
                            {posts.map((post, id) =>
                                <MiniCardDolzarb data={post}
                                    key={id}
                                    title={post.title}
                                    date={post.date}
                                    numberView={post.numberView}
                                    description={post.description.slice(0, 98) + '...'} />)}
                        </div>

                    </div>
                    <Link to="/maqola">

                        <button class="uk-button uk-button-primary button-mystyle">барча мақолалар</button>
                    </Link>

                </div>

                <div className="uk-card uk-card-default uk-card-body uk-margin-left uk-pos-man uk-card-mystyle lili">
                    <div className="sarlavha sarlavha-man">долзарб</div>
                    <div className="line-mystyle"></div>
                    {posts.map((post, id) =>
                        <MiniCardDolzarb
                            data={post}
                            key={id}
                            img={post.img}
                            title={post.title}
                            date={post.date}
                            numberView={post.numberView} />)}
                    <Link to="/maqola">
                        <button class="uk-button uk-button-primary button-mystyle">барчасини кўриш</button>
                    </Link>
                </div>
            </div>
        </div >

    )
}

export default MiddleCardMainPage;