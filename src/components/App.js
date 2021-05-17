import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import CurrentUserContext from '../context/CurrentUserContext';
import CardsContext from '../context/CardsContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';
import keyClose from '../utils/constants';


function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [cards, setCards] = useState([]);


  useEffect(() => {
    function handleEscClick(e) {
      if (e.key === keyClose) closeAllPopups();
    }
    document.addEventListener('keydown', handleEscClick)
    return () => {
      document.removeEventListener('keydown', handleEscClick);
    };
  }, []);


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
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [selectedDeleteCard, setSelectedDeleteCard] = useState({});

  function handleConfirmPopupClick(card) {
    setIsConfirmDeleteOpen(true);
    setSelectedDeleteCard(card)
  }

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
    setIsConfirmDeleteOpen(false);
    setSelectedCard({});
    setSelectedDeleteCard({});

  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleUpdateUser(name, about) {
    api.sendUser(name, about)
      .then(userData => setCurrentUser(userData))
  }

  function handleUpdateAvatar(avatar) {
    api.updateAvatar(avatar)
      .then(userData => setCurrentUser(userData))
  }

  //Обработка лайка карточки 

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((cards) => cards.map((c) => c.card._id === card._id ? { card: newCard } : c));
      });

  }

  //Обработка удаления карточки

  function handleCardDeleteBtn() {
    api.removeCard(selectedDeleteCard._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c.card._id !== selectedDeleteCard._id));
      })
  }

  function handleAddPlaceSubmit(addedCard) {
    api.addCard(addedCard)
      .then((newCard) => {
        setCards([{ card: newCard }, ...cards]);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={cards}>
        <div >
          <Header />
          <Main
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDeleteBtn={handleConfirmPopupClick}
          />
          <Footer />

          <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />

          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

          <ConfirmDeletePopup isOpen={isConfirmDeleteOpen} onClose={closeAllPopups} onCardDeleteBtn={handleCardDeleteBtn} />

          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        </div>
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
