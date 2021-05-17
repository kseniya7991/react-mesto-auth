import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmDeletePopup({ isOpen, onClose, onCardDeleteBtn }) {

    function handleSubmit(e) {
        e.preventDefault();
        onCardDeleteBtn()
        onClose();
    }

    return (
        <PopupWithForm name="delete-card" title="Вы уверены?" isOpen={isOpen} onClose={onClose} buttonValue="Да" onSubmit={handleSubmit}>
        </PopupWithForm>
    );
}
export default ConfirmDeletePopup;
