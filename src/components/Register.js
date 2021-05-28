import React, { useEffect } from 'react';
import SignForm from './SignForm';

function Register() {
     const name = "Register";
    /*onRender(name);
     */
    return(
    <SignForm name={name} title="Регистрация" buttonValue="Зарегистрироваться"/>
    )        
   
}

export default Register;