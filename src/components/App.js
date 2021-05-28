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

import MainPage from './MainPage';

function App() {
  const [loggedIn, setLoggetIn] = useState(true);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  /* const [headerLink, setHeaderLink] = useState('register') */

  /*  function handleRendering(name) {
    setHeaderLink(name);
  } */

  function closeAllPopups() {
    setIsInfoPopupOpen(false);
  }

  return (
    <div>
      <InfoTooltip isOpen={isInfoPopupOpen} onClose={closeAllPopups} status={false} />
      {loggedIn ? <HeaderLoggedIn /> : ''}
      <Switch>
        <Route path="/sign-up">
        <HeaderLinkSignUp />
          <Register />
        </Route>
        <Route path="/sign-in">
          <HeaderLinkSignIn />
          <Login />
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
