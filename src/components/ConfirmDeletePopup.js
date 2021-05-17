import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmDeletePopup({ isOpen, onClose }) {

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatarRef.current.value);
        //Закрываем попап
        onClose();
    }

    return (
        <PopupWithForm name="delete-card" title="Вы уверены?" isOpen={isOpen} onClose={closeAllPopups} buttonValue="Да">
        </PopupWithForm>
    );
}
export default ConfirmDeletePopup;
