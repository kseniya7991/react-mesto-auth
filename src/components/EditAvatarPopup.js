import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const currentUser = React.useContext(CurrentUserContext);
    const avatarRef = React.useRef();



    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatarRef.current.value);
        //Закрываем попап
        onClose();
    }

    return (
        <PopupWithForm name="update-avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} buttonValue="Сохранить" onSubmit={handleSubmit} >
            <section className="popup__input-section">
                <input className="popup__input popup__input_link_avatar" id="link-avatar" name="AvatarLink" type="url" placeholder="Ссылка на фото" required ref={avatarRef} defaultValue={currentUser.avatar || ''} />
                <span className="popup__input-error" id="link-avatar-error"></span>
            </section>
        </PopupWithForm>
    );
}
export default EditAvatarPopup;
