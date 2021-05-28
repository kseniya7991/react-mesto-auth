import React, { useEffect } from 'react';
import SignForm from './SignForm';

function Login() {
    const name = "Login";
   /*  onRender(name); */

    return(
    <SignForm name={name} title="Вход" buttonValue="Войти" />
    )        
   
}

export default Login;