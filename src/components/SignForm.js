import React, { useEffect } from 'react';
import keyClose from '../utils/constants';

function SignForm({name, title, buttonValue}) {

    return (
     /*    <section className="sign">
            <form className="sign__form" name={name} noValidate>
                <div>
                <h2 className="sign__title">{title}</h2>
                <section className="sign__input-section">
                    <input className="sign__input" id="email" name="email" type="email" placeholder="Email" required />
                    <input className="sign__input" id="password" name="password" type="password" placeholder="Пароль" required />
                </section>
                </div>
                <div>
                <button type="submit" formTarget="_self" className="sign__save-button" value={buttonValue}>{buttonValue}</button>
                

                <p className={`sign__text ${name == "Login" ? ' sign__text_disabled' : ''} `}>Уже зарегистрированы? <a className="sign__link">Войти</a></p>
                </div>
            </form>
        </section> */
        <section className="sign">
        <form className="sign__form" name={name} noValidate>
            <div>
            <h2 className="popup__title popup__title_sign">{title}</h2>
            <section className="popup__input-section">
                <input className="sign__input" id="email" name="email" type="email" placeholder="Email" required />
                <input className="sign__input" id="password" name="password" type="password" placeholder="Пароль" required />
            </section>
            </div>
            <div>
            <button type="submit" formTarget="_self" className="sign__save-button" value={buttonValue}>{buttonValue}</button>
            

            <p className={`sign__text ${name == "Login" ? ' sign__text_disabled' : ''} `}>Уже зарегистрированы? <a className="sign__link">Войти</a></p>
            </div>
        </form>
    </section>
      
    );
}

export default SignForm;


{/* <section className={`popup popup_${name} ${isOpen ? ' popup_opened' : ''}`} onClick={handleOverlayClick} >
            <form className={`popup__form popup__form_${name}`} name="userProfileForm" noValidate onSubmit={onSubmit} >
                <button type="reset" className="popup-close" aria-label="close" onClick={onClose}></button>
                <h2 className={`popup__title popup__title_${name}`}>{title}</h2>
                <section className="popup__input-section">
                <input className="popup__input popup__input_text_name" id="profile-name" name="name" type="text" placeholder={"Ваше имя"} value={name || ''} minLength="2" maxLength="40" required onChange={handleInputNameChange} />
                <span className="popup__input-error" id="profile-name-error"></span>
            </section>
            <section className="popup__input-section">
                <input className="popup__input popup__input_text_about" id="profile-about" name="about" type="text" placeholder="Чем вы занимаетесь" value={about || ''} minLength="2" maxLength="200" required onChange={handleInputAboutChange} />
                <span className="popup__input-error" id="profile-about-error"></span>
            </section>
                <button type="submit" formTarget="_self" className={`popup__save-button popup__save-button_${name}`} aria-label="save" value={buttonValue}>{buttonValue}</button>
            </form>
        </section> */}