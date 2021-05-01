import React from 'react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

function Card({ title, photo, alt, likes }) {
    return (
        <li className="photo">
            <img className="photo__img" alt={alt} src={photo} />
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
}
export default Card;
