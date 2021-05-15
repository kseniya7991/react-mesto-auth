import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import CurrentUserContext from '../context/CurrentUserContext';
import CardsContext from '../context/CardsContext';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUser()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });

    api.getCards()
      .then(data =>
        setCards(data.map(card => ({
          card
        })))
      )
      .catch((err) => {
        console.log(err);
      });
  }, [])

  

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleLikeClick(newCard,card) {
   setCards((cards) => cards.map((c) => c.card._id === card._id ? {card: newCard} : c)); 
  }

  //Написать отрисовку нового массива
  function handleDeleteClick(card) {
    setCards((cards) => cards.filter((c) => c.card._id !== card._id)); 
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={cards}>
      <div>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onLikeClick={handleLikeClick}
          onDeleteClick={handleDeleteClick}
        />
        <Footer />

        <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} /> 
        {/* <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonValue="Сохранить">
          <section className="popup__input-section">
            <input className="popup__input popup__input_text_name" id="profile-name" name="name" type="text" placeholder="Ваше имя" minLength="2" maxLength="40" required />
            <span className="popup__input-error" id="profile-name-error"></span>
          </section>
          <section className="popup__input-section">
            <input className="popup__input popup__input_text_about" id="profile-about" name="about" type="text" placeholder="Чем вы занимаетесь" minLength="2" maxLength="200" required />
            <span className="popup__input-error" id="profile-about-error"></span>
          </section>
        </PopupWithForm> */}

        <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonValue="Создать">
          <section className="popup__input-section">
            <input className="popup__input popup__input_text_title" id="add-title" name="Title" type="text" placeholder="Название" minLength="2" maxLength="40" required />
            <span className="popup__input-error" id="add-title-error"></span>
          </section>
          <section className="popup__input-section">
            <input className="popup__input popup__input_link_photo" id="add-link" name="Link" type="url" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error" id="add-link-error"></span>
          </section>
        </PopupWithForm>


        <PopupWithForm name="delete-card" title="Вы уверены?" onClose={closeAllPopups} buttonValue="Да">
        </PopupWithForm>

        <PopupWithForm name="update-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonValue="Сохранить" >
          <section className="popup__input-section">
            <input className="popup__input popup__input_link_avatar" id="link-avatar" name="AvatarLink" type="url" placeholder="Ссылка на фото" required />
            <span className="popup__input-error" id="link-avatar-error"></span>
          </section>
        </PopupWithForm>
      </div>
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
