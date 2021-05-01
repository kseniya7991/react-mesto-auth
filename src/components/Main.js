import addButton from '../images/__add-button.svg';

function Main({onEditProfile, onAddPlace, onEditAvatar, userName, userAvatar, userDescription}) {
  return (
    <main>
    <section className="profile">
      <div className="user">
        <div className="user-photo" onClick={onEditAvatar}>
          <img className="user__avatar" src={userAvatar} alt="фото пользователя" title="фото пользователя"  /> 
        </div>
        <div className="user__profile-info">
          <div className="user__name-block">
            <h1 className="user__name">{userName}</h1>
            <button className="user__edit-button" type="submit" aria-label="edit" onClick={onEditProfile} ></button>
          </div>    
          <p className="user__about">{userDescription}</p>
        </div>
      </div>
      
      <button className="add-button" type="button" onClick={onAddPlace} >
         <img src={addButton} className="add-button__image"  alt="кнопка" title="кнопка" />
      </button>
    </section>

    <section className="photo-tape">
      <ul className="photos-grid">
      </ul>
    </section>
  </main>
  );
}

/* function handleEditAvatarClick() {
  const popupEditAvatar = document.querySelector('.popup_update-avatar')
  popupEditAvatar.classList.add('popup_opened');
}

function handleEditProfileClick() {
  const popupEditAvatar = document.querySelector('.popup_profile')
  popupEditAvatar.classList.add('popup_opened');
}

function handleAddPlaceClick() {
  const popupEditAvatar = document.querySelector('.popup_add')
  popupEditAvatar.classList.add('popup_opened');
} */

export default Main;
