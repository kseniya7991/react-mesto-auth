import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProectedRoute';

import MainPage from './MainPage';

function App() {
  const [loggedIn, setLoggetIn] = useState(false);
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/sign-in">
          <Login />
        </Route>
        <ProtectedRoute path="/" loggedIn={loggedIn} component={MainPage} />
        <Route exact path="/">
          {loggedIn ? <Redirect to="/profile" /> : <Redirect to="/sign-up" />}
        </Route>
      </Switch>
   {/*    <InfoTooltip /> */}
      <Footer />
    </div>
  );
}

export default App;
