import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProectedRoute';
import InfoTooltip from './InfoTooltip';
import HeaderLinkSignIn from './HeaderLinkSignIn';
import HeaderLinkSignUp from './HeaderLinkSignUp';
import HeaderLoggedIn from './HeaderLoggedIn';

import { useHistory } from "react-router";

import MainPage from './MainPage';
import * as auth from '../utils/auth';

/* auth.register("11122a2qsdswe@email.ru", "1112sd22aqsw333") */
/* auth.register("111222333@email.ru", "111222333") */
/* auth.register("111222@email.ru", "111222") */
/* auth.authorize("111222@email.ru", "111222") */
/* auth.checkToken('sssd') */

function App() {
  const [loggedIn, setLoggetIn] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [statusInfoPopup, setStatusInfoPopup] = useState(false);
  const [state, setState] = useState({});
  const history = useHistory();
  const [message, setMessage] = useState('');

  function closeInfoPopup() {
    if(statusInfoPopup) {
      setIsInfoPopupOpen(false);
      history.push('/sign-in')
    } else {
      setIsInfoPopupOpen(false);
    }
  }

  function handleSubmitRegister(email, password) {
    auth.register(email, password)
    .then((res) => {
       if(!res.error) {
        setStatusInfoPopup(true);
        setIsInfoPopupOpen(true)
      }  else {
        setMessage(res.error)
        setStatusInfoPopup(false);
        setIsInfoPopupOpen(true);
      } 
    })
    .catch((err) => {console.error(err)}
    )
  }

  function handleSubmitLogin(email,password) {
    auth.authorize(email, password)
    .then((res) => {
      console.log(res)
      if (res.message){
        setMessage(res.message)
        setStatusInfoPopup(false);
        setIsInfoPopupOpen(true);
      }
      if (res.token){
        setLoggetIn(true)
        history.push('/');
        }
    })
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <InfoTooltip isOpen={isInfoPopupOpen} onClose={closeInfoPopup} status={statusInfoPopup} message={message}/>
      
      <Header>
        <Switch>
          <Route path="/sign-up">
          <HeaderLinkSignUp />
          </Route>
          <Route path="/sign-in">
            <HeaderLinkSignIn />
          </Route>
          <ProtectedRoute path="/" loggedIn={loggedIn} component={HeaderLoggedIn} />
        </Switch>
      </Header>

      <Switch>
        <Route path="/sign-up">
          <Register onRegister={handleSubmitRegister}/>
        </Route>
        <Route path="/sign-in">
          <Login onLogin={handleSubmitLogin}/>
        </Route>
        <ProtectedRoute path="/" loggedIn={loggedIn} component={MainPage} />
        <Route exact path="/">
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-up" />}
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
