import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../context/CurrentUserContext';

function EditProfilePopup({isOpen, onClose}) {

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [about, setAbout] = React.useState('');
    
    React.useEffect(() => {
        setName(currentUser.name);
        setAbout(currentUser.about);
      }, [currentUser]);

    function handleInputNameChange(e) {
        setName(e.target.value);
    }

    function handleInputAboutChange(e) {
        setAbout(e.target.value);
    }

    return (
        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} buttonValue="Сохранить">
            <section className="popup__input-section">
                <input className="popup__input popup__input_text_name" id="profile-name" name="name" type="text" placeholder={"Ваше имя"} value={name || ''} minLength="2" maxLength="40" required onChange={handleInputNameChange}/>
                <span className="popup__input-error" id="profile-name-error"></span>
            </section>
            <section className="popup__input-section">
                <input className="popup__input popup__input_text_about" id="profile-about" name="about" type="text" placeholder="Чем вы занимаетесь" value={about || ''} minLength="2" maxLength="200" required onChange={handleInputAboutChange}/>
                <span className="popup__input-error" id="profile-about-error"></span>
            </section>
        </PopupWithForm>
    );
}

export default EditProfilePopup;
