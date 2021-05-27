import React, { useEffect } from 'react';
import keyClose from '../utils/constants';

function SignForm({name, title, buttonValue}) {

    return (
        <section className="sign">
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
        </section>
      
    );
}

export default SignForm;
