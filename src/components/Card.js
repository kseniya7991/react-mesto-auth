import React from 'react';

function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
      }  

    return (
        <li className="photo">
            <img className="photo__img" alt={card.name} src={card.link} onClick={handleClick}/>
            <div className="photo__description">
                <h2 className="photo__title">{card.name}</h2>
                <div className="photo__like-wrapper">
                    <button className="photo__like" type="button" aria-label="like"></button>
                    <span className="photo__like-counter">{card.likes.length}</span>
                </div>
            </div>
            <button className="photo__delete photo__delete_inactive" type="button" aria-label="delete"></button>
        </li> 
    )
}
export default Card;
