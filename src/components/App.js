
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
  <section class="popup popup_profile">
    <form class="popup__form popup__form_profile" name="userProfileForm" novalidate>
      <button type="reset" class="popup-close" aria-label="close"></button>
      <h2 class="popup__title popup__title_profile">Редактировать профиль</h2>
      <section class="popup__input-section">
        <input class="popup__input popup__input_text_name" id="profile-name" name="name" type="text" placeholder="Ваше имя" minlength="2" maxlength="40" required />
        <span class="popup__input-error" id="profile-name-error"></span>
      </section>
      <section class="popup__input-section">
        <input class="popup__input popup__input_text_about"  id="profile-about" name="about" type="text" placeholder="Чем вы занимаетесь" minlength="2" maxlength="200" required />
        <span class="popup__input-error"  id="profile-about-error"></span>
      </section>
      <button type="submit" formtarget="_self" class="popup__save-button popup__save-button_profile" aria-label="save" value="Сохранить">Сохранить</button>
    </form>
  </section>

  <section class="popup popup_add">
    <form class="popup__form popup__form_add" name="addCardForm" novalidate>
      <button type="reset" class="popup-close popup-close_add" aria-label="close"></button>
      <h2 class="popup__title popup__title_add">Новое место</h2>
      <section class="popup__input-section">
        <input class="popup__input popup__input_text_title"  id="add-title" name="Title" type="text" placeholder="Название" minlength="2" maxlength="40" required />
        <span class="popup__input-error" id="add-title-error"></span>
      </section>
      <section class="popup__input-section">
       <input class="popup__input popup__input_link_photo"  id="add-link" name="Link" type="url" placeholder="Ссылка на картинку" required />
       <span class="popup__input-error"  id="add-link-error"></span>
      </section>
      <button type="submit" formtarget="_self" class="popup__save-button popup__save-button_add" aria-label="create" value="Создать">Создать</button>
    </form>
  </section>

  <section class="popup popup_photo">
    <figure class="popup__photo-block">
      <button type="reset" class="popup-close popup-close_card" aria-label="close"></button>
      <img class="popup__photo" src="#" alt="#" />
      <figcaption class="popup__caption"></figcaption>
    </figure>
  </section>

  <section class="popup popup_delete-card">
    <form class="popup__form popup__form_detele-card" name="deleteCard" novalidate>
      <button type="reset" class="popup-close popup-close_delete-card" aria-label="close"></button>
      <h2 class="popup__title popup__title_delete-card">Вы уверены?</h2>
      <button type="submit" formtarget="_self" class="popup__save-button popup__save-button_delete-card" aria-label="save" value="Да">Да</button>
    </form>
  </section>

  
  <section class="popup popup_update-avatar">
    <form class="popup__form popup__form_update-avatar" name="updateAvatar" novalidate>
      <button type="reset" class="popup-close" aria-label="close"></button>
      <h2 class="popup__title popup__title_update-avatar">Обновить аватар</h2>
      <section class="popup__input-section">
        <input class="popup__input popup__input_link_avatar" id="link-avatar" name="AvatarLink" type="url" placeholder="Ссылка на фото" required />
        <span class="popup__input-error" id="link-avatar-error"></span>
      </section>
      <button type="submit" formtarget="_self" class="popup__save-button popup__save-button_update-avatar" aria-label="save" value="Сохранить">Сохранить</button>
    </form>
  </section>
 

   <template class="template">
    <li class="photo">
      <img class="photo__img" alt="#" src="#" /> 
      <div class="photo__description">
        <h2 class="photo__title"></h2>
        <div class="photo__like-wrapper">
          <button class="photo__like" type="button" aria-label="like"></button>
          <span class="photo__like-counter"></span>
        </div>
      </div>
      <button class="photo__delete photo__delete_inactive" type="button" aria-label="delete"></button>
    </li>
  </template>
</div>
</>
  );
}

export default App;
