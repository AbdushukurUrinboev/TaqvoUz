import React, {useEffect, useState} from 'react';
import './ElektronKutubhona.css'
import Slider from "react-slick";
import BooksCard from '../booksCard/BooksCard';
import axios from 'axios';



function ElektronKutubhona() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/elektronKutubxona')
            .then(res => {
                // console.log(res);
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err);

            })
    }, [])
    

const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 6,
slidesToScroll: 1
};


return (
<div className="container-fluid my-container-style">
    <div className="uk-container blue-my-cover-style">
        <div className="bgg">
            <h2 className="sarlavha kutubhona-my-style"> электрон кутубхона</h2>
            <p className="tavsiya-my-style tavs-m">Биз сизга қуйидаги китобларни</p>
            <p className="tavsiya-my-style tavsiya-man">ўқиб чиқишни тавсия этамиз</p>
            <div className="line-tavsiya-style"></div>
            <Slider {...settings}>
                    {posts.map(post => <BooksCard img={post.img} />)}                
            </Slider>
        </div>
    </div>
</div>
);
}
export default ElektronKutubhona;