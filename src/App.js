import React, { useState, useEffect } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AuthContext from './store/auth-context';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('isLoggedUser');
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        setLoggedIn(userData.isLogged);
      }
    } catch (error) {
      console.error('Error restoring login state:', error);
      // Handle error (e.g., show an error message)
    }
  }, []);

  const loginHandler = (user, password) => {
    if (user && password && password.length > 6) {
      try {
        localStorage.setItem('isLoggedUser', JSON.stringify({
          userEmail: user,
          isLogged: true,
        }));
        setLoggedIn(true);
      } catch (error) {
        console.error('Error saving login data:', error);
        alert('Login failed. Please try again.');
        // Handle error (e.g., show an error message)
      }
    } else {
      alert('Invalid email or password. Password must be at least 7 characters.');
    }
  };

  const logoutHandler = () => {
    try {
      localStorage.removeItem('isLoggedUser');
      setLoggedIn(false);
    } catch (error) {
      console.error('Error logging out:', error);
      // Handle error
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: loggedIn, onLogout: logoutHandler }}
    >
      <React.Fragment>
        <MainHeader isAuthenticated={loggedIn} onLogout={logoutHandler} />
        <main>
          {!loggedIn && <Login onLogin={loginHandler} />}
          {loggedIn && <Home />}
        </main>
      </React.Fragment>
    </AuthContext.Provider>
  );
}

export default App;