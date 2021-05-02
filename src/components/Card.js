import React from 'react';

function Card({ title, link, alt, likes, onCardClick }) {
    return (
        <li className="photo">
            <img className="photo__img" alt={alt} src={link} onClick={handleClick} />
            <div className="photo__description">
                <h2 className="photo__title">{title}</h2>
                <div className="photo__like-wrapper">
                    <button className="photo__like" type="button" aria-label="like"></button>
                    <span className="photo__like-counter">{likes}</span>
                </div>
            </div>
            <button className="photo__delete photo__delete_inactive" type="button" aria-label="delete"></button>
        </li>
    )

    function handleClick() {
        onCardClick({ title, link });
    }
}
export default Card;
