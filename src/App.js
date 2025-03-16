import React, { useState, useEffect } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Check localStorage when the component is mounted to restore the login state
  useEffect(() => {
    const storedUser = localStorage.getItem('isLoggedUser');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setLoggedIn(userData.isLogged);
    }
  }, []);

  // Handler for login
  const loginHandler = (user, password) => {
    // Make sure username and password are valid
    if (user && password && password.length > 6) {
      // Save the login status in localStorage
      localStorage.setItem('isLoggedUser', JSON.stringify({
        username: user,
        isLogged: true
      }));
      setLoggedIn(true);
    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  // Handler for logout
  const logoutHandler = () => {
    // Remove user data from localStorage and log the user out
    localStorage.removeItem('isLoggedUser');
    setLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={loggedIn} onLogout={logoutHandler} />
      
      <main>
        {/* Show Login if user is not logged in */}
        {!loggedIn && <Login onLogin={loginHandler} />}
        
        {/* Show Home if user is logged in */}
        {loggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
