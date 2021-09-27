import React from 'react';
import './BooksCard.css'

function BooksCard(props) {
    return(
        <div className="book-my-style">
            <img src={props.img} alt="" />
        </div>
    )
}

export default BooksCard;