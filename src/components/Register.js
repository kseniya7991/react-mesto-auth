import React, { useEffect, useState } from 'react';
import SignForm from './SignForm';

function Register({onRegister}) {
     const name = "Register";
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
  
     function handleSubmit(e) {
        e.preventDefault();
        onRegister(email, password)
     }

     function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordChenge(e) {
        setPassword(e.target.value)
    }

    return(
    <SignForm name={name} title="Регистрация" buttonValue="Зарегистрироваться" onSubmit={handleSubmit}  onChangeEmail={handleEmailChange} onChangePassword={handlePasswordChenge}/>
    )        
   
}

export default Register;