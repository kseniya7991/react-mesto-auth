import React, { useEffect, useState} from 'react';
import SignForm from './SignForm';

function Login({ onLogin }) {
  const name = 'Login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChenge(e) {
    setPassword(e.target.value);
  }
  return (
    <SignForm
      name={name}
      title="Вход"
      buttonValue="Войти"
      onChangeEmail={handleEmailChange}
      onChangePassword={handlePasswordChenge}
      onSubmit={handleSubmit}
    />
  );
}

export default Login;
