import React, { useEffect } from 'react';
import keyClose from '../utils/constants';
import { Redirect } from 'react-router-dom';

function SignForm({name, title, buttonValue, onSubmit, onChangeEmail, onChangePassword}) {

    function handleRegisterLink() {
        console.log('fff');
        <Redirect to="/sign-in"></Redirect>
    }


    return (
        <section className="sign">
        <form className="popup__form popup__form_sign" name={name} onSubmit={onSubmit}>  
            <div>
            <h2 className="popup__title popup__title_sign">{title}</h2>
            <section className="popup__input-section">
                <input className="popup__input popup__input_sign" id="email" name="email" type="email" placeholder="Email" required onChange={onChangeEmail}/>
                <input className="popup__input popup__input_sign" id="password" name="password" type="password" placeholder="Пароль" required onChange={onChangePassword} />
            </section>
            </div>
            <div>
            <button type="submit" formTarget="_self" className="popup__save-button popup__save-button_sign" value={buttonValue}>{buttonValue}</button>
            <p className={`sign__text ${name == "Login" ? ' sign__text_disabled' : ''} `}>Уже зарегистрированы? <a className="sign__link" onClick={handleRegisterLink}>Войти</a></p>
            </div>
        </form>
    </section>
      
    );
}

export default SignForm;
