import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProectedRoute';
import InfoTooltip from './InfoTooltip';
import HeaderLinkSignIn from './HeaderLinkSignIn';
import HeaderLinkSignUp from './HeaderLinkSignUp';
import HeaderSignOut from './HeaderSignOut';

import { useHistory } from "react-router";

import MainPage from './MainPage';
import * as auth from '../utils/auth';

/* auth.register("11122a2qsdswe@email.ru", "1112sd22aqsw333") */
/* auth.register("111222333@email.ru", "111222333") */
/* auth.register("111222@email.ru", "111222") */
/* auth.authorize("111222@email.ru", "111222") */
/* auth.checkToken('sssd') */

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [statusInfoPopup, setStatusInfoPopup] = useState(false);
  const history = useHistory();
  const [message, setMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    tokenCheck()
  }, [])

  useEffect(() => {
    if(loggedIn) {
      history.push('/')
    }
  }, [loggedIn])

  function closeInfoPopup() {
    if(statusInfoPopup) {
      setIsInfoPopupOpen(false);
      history.push('/sign-in')
    } else {
      setIsInfoPopupOpen(false);
    }
  }


  function tokenCheck() {
    const token = localStorage.getItem('token');
    if(token) {
      auth.getContent(token)
      .then((res) => {
        const { _id , email} = res.data;
        setUserEmail(email)
        setLoggedIn(true)
      })
      .catch((err) => console.log(err))
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
      if (res.message){
        setMessage(res.message)
        setStatusInfoPopup(false);
        setIsInfoPopupOpen(true);
      }
      if (res.token){
        setLoggedIn(true)
        history.push('/');
        setUserEmail(email)
        }
    })
    .catch((err) => console.log(err));
  }

  function handleSignOut() {
    localStorage.removeItem('token')
    setLoggedIn(false);
    setUserEmail('');
    <Redirect to="/sign-in" />
  }

  return (
    <div>
      <InfoTooltip isOpen={isInfoPopupOpen} onClose={closeInfoPopup} status={statusInfoPopup} message={message}/>
      
      <Header email={userEmail} isLogged={loggedIn}>
        <Switch>
          <Route path="/sign-up">
          <HeaderLinkSignUp />
          </Route>
          <Route path="/sign-in">
            <HeaderLinkSignIn />
          </Route>
          <ProtectedRoute path="/" loggedIn={loggedIn} component={HeaderSignOut} onSignOut={handleSignOut}/>
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
