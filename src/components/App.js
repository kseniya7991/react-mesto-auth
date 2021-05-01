
import Header from './Header';
import Main from './Main'
import Footer from './Footer';

function App() {
  return (
<>   
<div>
  <Header />
  <Main />
  <Footer />
  <section className="popup popup_profile">
    <form className="popup__form popup__form_profile" name="userProfileForm" noValidate>
      <button type="reset" className="popup-close" aria-label="close"></button>
      <h2 className="popup__title popup__title_profile">Редактировать профиль</h2>
      <section className="popup__input-section">
        <input className="popup__input popup__input_text_name" id="profile-name" name="name" type="text" placeholder="Ваше имя" minLength="2" maxLength="40" required />
        <span className="popup__input-error" id="profile-name-error"></span>
      </section>
      <section className="popup__input-section">
        <input className="popup__input popup__input_text_about"  id="profile-about" name="about" type="text" placeholder="Чем вы занимаетесь" minLength="2" maxLength="200" required />
        <span className="popup__input-error"  id="profile-about-error"></span>
      </section>
      <button type="submit" formTarget="_self" className="popup__save-button popup__save-button_profile" aria-label="save" value="Сохранить">Сохранить</button>
    </form>
  </section>

  <section className="popup popup_add">
    <form className="popup__form popup__form_add" name="addCardForm" noValidate>
      <button type="reset" className="popup-close popup-close_add" aria-label="close"></button>
      <h2 className="popup__title popup__title_add">Новое место</h2>
      <section className="popup__input-section">
        <input className="popup__input popup__input_text_title"  id="add-title" name="Title" type="text" placeholder="Название" minLength="2" maxLength="40" required />
        <span className="popup__input-error" id="add-title-error"></span>
      </section>
      <section className="popup__input-section">
       <input className="popup__input popup__input_link_photo"  id="add-link" name="Link" type="url" placeholder="Ссылка на картинку" required />
       <span className="popup__input-error"  id="add-link-error"></span>
      </section>
      <button type="submit" formTarget="_self" className="popup__save-button popup__save-button_add" aria-label="create" value="Создать">Создать</button>
    </form>
  </section>

  <section className="popup popup_photo">
    <figure className="popup__photo-block">
      <button type="reset" className="popup-close popup-close_card" aria-label="close"></button>
      <img className="popup__photo" src="#" alt="#" />
      <figcaption className="popup__caption"></figcaption>
    </figure>
  </section>

  <section className="popup popup_delete-card">
    <form className="popup__form popup__form_detele-card" name="deleteCard" noValidate>
      <button type="reset" className="popup-close popup-close_delete-card" aria-label="close"></button>
      <h2 className="popup__title popup__title_delete-card">Вы уверены?</h2>
      <button type="submit" formTarget="_self" className="popup__save-button popup__save-button_delete-card" aria-label="save" value="Да">Да</button>
    </form>
  </section>

  
  <section className="popup popup_update-avatar">
    <form className="popup__form popup__form_update-avatar" name="updateAvatar" noValidate>
      <button type="reset" className="popup-close" aria-label="close"></button>
      <h2 className="popup__title popup__title_update-avatar">Обновить аватар</h2>
      <section className="popup__input-section">
        <input className="popup__input popup__input_link_avatar" id="link-avatar" name="AvatarLink" type="url" placeholder="Ссылка на фото" required />
        <span className="popup__input-error" id="link-avatar-error"></span>
      </section>
      <button type="submit" formTarget="_self" className="popup__save-button popup__save-button_update-avatar" aria-label="save" value="Сохранить">Сохранить</button>
    </form>
  </section>
 

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
</>
  );
}

export default App;
