import React from 'react';
import CardsContext from '../context/CardsContext';
import CurrentUserContext from '../context/CurrentUserContext';
import addButton from '../images/__add-button.svg';
import Card from './Card';
import api from '../utils/api';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onLikeClick}) {

  const currentUser = React.useContext(CurrentUserContext);
  const cards = React.useContext(CardsContext);
  

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки

      api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        onLikeClick(newCard, card)
      }); 

   }


  return (
    
    <main>
      <section className="profile">
        <div className="user">
          <div className="user-photo" onClick={onEditAvatar}>
            <img className="user__avatar" src={currentUser.avatar} alt="фото пользователя" title="фото пользователя" />
          </div>
          <div className="user__profile-info">
            <div className="user__name-block">
              <h1 className="user__name">{currentUser.name}</h1>
              <button className="user__edit-button" type="submit" aria-label="edit" onClick={onEditProfile} ></button>
            </div>
            <p className="user__about">{currentUser.about}</p>
          </div>
        </div>

        <button className="add-button" type="button" onClick={onAddPlace} >
          <img src={addButton} className="add-button__image" alt="кнопка" title="кнопка" />
        </button>
      </section>

      <section className="photo-tape">
        <div className='photos-grid'>
          {cards.map(({...card }) => <Card key={card.card._id} {...card} onCardClick={onCardClick} currentUser={currentUser} onCardLike={handleCardLike}/>)}
        </div>
      </section>

    </main>
  );
}

export default Main;
