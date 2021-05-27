import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProectedRoute';

import api from '../utils/api';

import CurrentUserContext from '../contexts/CurrentUserContext';
import CardsContext from '../contexts/CardsContext';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggetIn] = useState(true);

  useEffect(() => {
    Promise.all([api.getUser(), api.getCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData.map((card) => ({ card })));
      })
      .catch((err) => console.log(err));
  }, []);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [selectedDeleteCard, setSelectedDeleteCard] = useState({});

  function handleConfirmPopupClick(card) {
    setIsConfirmDeleteOpen(true);
    setSelectedDeleteCard(card);
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
    setSelectedCard(card);
  }

  function handleUpdateUser(name, about) {
    return api
      .sendUser(name, about)
      .then((userData) => setCurrentUser(userData))
      .then(() => closeAllPopups())
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(avatar) {
    return api
      .updateAvatar(avatar)
      .then((userData) => setCurrentUser(userData))
      .then(() => closeAllPopups())
      .catch((err) => console.log(err));
  }

  //Обработка лайка карточки

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки

    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((cards) => cards.map((c) => (c.card._id === card._id ? { card: newCard } : c)));
      })
      .catch((err) => console.log(err));
  }

  //Обработка удаления карточки

  function handleCardDeleteBtn() {
    return api
      .removeCard(selectedDeleteCard._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c.card._id !== selectedDeleteCard._id));
      })
      .then(() => closeAllPopups())
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(addedCard) {
    return api
      .addCard(addedCard)
      .then((newCard) => {
        setCards([{ card: newCard }, ...cards]);
      })
      .then(() => closeAllPopups())
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={cards}>
        <div>
          <Header />

          <Switch>
            <Route path="/sign-up">
              <Register />
            </Route>
            <Route path="/sign-in">
              <Login />
            </Route>
           {/*  <ProtectedRoute path="/" loggedIn={loggedIn} component={Main} />
            <ProtectedRoute path="/" loggedIn={loggedIn} component={Footer} />
            <ProtectedRoute path="/" loggedIn={loggedIn} component={ImagePopup} />
            <ProtectedRoute path="/" loggedIn={loggedIn} component={EditProfilePopup} />
            <ProtectedRoute path="/" loggedIn={loggedIn} component={AddPlacePopup} />
            <ProtectedRoute path="/" loggedIn={loggedIn} component={ConfirmDeletePopup} />
            <ProtectedRoute path="/" loggedIn={loggedIn} component={EditAvatarPopup} /> */}
            <ProtectedRoute path="/" loggedIn={loggedIn} >
        
              <Main
                cards={cards}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDeleteBtn={handleConfirmPopupClick}
              />
              

              <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />

              <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
              />

              <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlaceSubmit}
              />

              <ConfirmDeletePopup
                isOpen={isConfirmDeleteOpen}
                onClose={closeAllPopups}
                onCardDeleteBtn={handleCardDeleteBtn}
              />

              <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
              />
            </ProtectedRoute>
            <Route exact path="/">
              {loggedIn ? <Redirect to="/profile" /> : <Redirect to="/sign-up" />}
            </Route>
          </Switch>
          <Footer />

          {/* <Main
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

          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />  */}
        </div>
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
