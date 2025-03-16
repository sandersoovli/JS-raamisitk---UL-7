import React, { useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginHandler = (user, password) => {
    localStorage.setItem('isLoggedUser', JSON.stringify({
      username: user,
      isLogged: true
    }));
    setLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedUser');
    setLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={loggedIn} onLogout={logoutHandler} />
      <main>
        {!loggedIn && <Login onLogin={loginHandler} />}
        {loggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;