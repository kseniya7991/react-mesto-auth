import React, { useEffect } from 'react';
import SignForm from './SignForm';

function Register() {
     const name = "Register";
  
     function handleSubmit() {

     }

     function handleEmailChange(e) {
        console.log('email: ', e.target.value)
    }

    function handlePasswordChenge(e) {
        console.log('password: ', e.target.value)
    }

    return(
    <SignForm name={name} title="Регистрация" buttonValue="Зарегистрироваться" onSubmit={handleSubmit}  onChangeEmail={handleEmailChange} onChangePassword={handlePasswordChenge}/>
    )        
   
}

export default Register;