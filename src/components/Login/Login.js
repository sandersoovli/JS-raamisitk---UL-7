import React, { useState, useEffect } from 'react';
import './Login.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setEmailIsValid(event.target.value.includes('@'));
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setPasswordIsValid(event.target.value.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <div className={`control ${emailIsValid === false ? 'invalid' : ''}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={`control ${passwordIsValid === false ? 'invalid' : ''}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className="actions">
          <Button type="submit" disabled={!formIsValid}>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;