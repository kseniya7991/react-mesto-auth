
import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import React, { useEffect, useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

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
  }

  return (
    <div>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <section className="popup__input-section">
          <input className="popup__input popup__input_text_name" id="profile-name" name="name" type="text" placeholder="Ваше имя" minLength="2" maxLength="40" required />
          <span className="popup__input-error" id="profile-name-error"></span>
        </section>
        <section className="popup__input-section">
          <input className="popup__input popup__input_text_about" id="profile-about" name="about" type="text" placeholder="Чем вы занимаетесь" minLength="2" maxLength="200" required />
          <span className="popup__input-error" id="profile-about-error"></span>
        </section>
        <button type="submit" formTarget="_self" className="popup__save-button popup__save-button_profile" aria-label="save" value="Сохранить">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <section className="popup__input-section">
          <input className="popup__input popup__input_text_title" id="add-title" name="Title" type="text" placeholder="Название" minLength="2" maxLength="40" required />
          <span className="popup__input-error" id="add-title-error"></span>
        </section>
        <section className="popup__input-section">
          <input className="popup__input popup__input_link_photo" id="add-link" name="Link" type="url" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error" id="add-link-error"></span>
        </section>
        <button type="submit" formTarget="_self" className="popup__save-button popup__save-button_add" aria-label="create" value="Создать">Создать</button>
      </PopupWithForm>


      <PopupWithForm name="delete-card" title="Вы уверены?" onClose={closeAllPopups}>
        <button type="submit" formTarget="_self" className="popup__save-button popup__save-button_delete-card" aria-label="save" value="Да">Да</button>
      </PopupWithForm>

      <PopupWithForm name="update-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}> 
        <section className="popup__input-section">
          <input className="popup__input popup__input_link_avatar" id="link-avatar" name="AvatarLink" type="url" placeholder="Ссылка на фото" required />
          <span className="popup__input-error" id="link-avatar-error"></span>
        </section>
        <button type="submit" formTarget="_self" className="popup__save-button popup__save-button_update-avatar" aria-label="save" value="Сохранить">Сохранить</button>
      </PopupWithForm>

      <template className="template">
        <li className="photo">
          <img className="photo__img" alt="#" src="#" />
          <div className="photo__description">
            <h2 className="photo__title"></h2>
            <div className="photo__like-wrapper">
              <button className="photo__like" type="button" aria-label="like"></button>
              <span className="photo__like-counter"></span>
            </div>
          </div>
          <button className="photo__delete photo__delete_inactive" type="button" aria-label="delete"></button>
        </li>
      </template>
    </div>
  );
}



export default App;
