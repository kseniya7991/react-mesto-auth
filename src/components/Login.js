import React, { useEffect } from 'react';
import SignForm from './SignForm';

function Login() {
  const name = 'Login';
  /*  onRender(name); */

  function handleEmailChange(e) {
    console.log('email: ', e.target.value);
  }

  function handlePasswordChenge(e) {
    console.log('password: ', e.target.value);
  }
  return <SignForm name={name} title="Вход" buttonValue="Войти" onChangeEmail={handleEmailChange} onChangePassword={handlePasswordChenge} />;
}

export default Login;
