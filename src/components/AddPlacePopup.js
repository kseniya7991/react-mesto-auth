import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../context/CurrentUserContext';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

    const [title, setTitle] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({title, link})
        //Закрываем попап
        onClose();
    }

    function handleInputTitle(e) {
        setTitle(e.target.value);
    }

    function handleInputCardLink(e) {
        setLink(e.target.value);
    }

    return (
        <PopupWithForm name="add" title="Новое место" isOpen={isOpen} onClose={onClose} buttonValue="Создать" onSubmit={handleSubmit}>
            <section className="popup__input-section">
                <input className="popup__input popup__input_text_title" id="add-title" name="Title" type="text" placeholder="Название" minLength="2" maxLength="40" required onChange={handleInputTitle} defaultValue={''} />
                <span className="popup__input-error" id="add-title-error"></span>
            </section>
            <section className="popup__input-section">
                <input className="popup__input popup__input_link_photo" id="add-link" name="Link" type="url" placeholder="Ссылка на картинку" required onChange={handleInputCardLink} defaultValue={''}/>
                <span className="popup__input-error" id="add-link-error"></span>
            </section>
        </PopupWithForm>
    );
}
export default AddPlacePopup;
