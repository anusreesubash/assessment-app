import React, {useState} from 'react';
import StyledWrapper from './StyledWrapper';
import { IconUser, IconShieldLock, IconLogin } from '@tabler/icons';
import {useAuth} from './../../providers/Auth';
import LoginApi from './../../api/login';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authState, authDispatch] = useAuth();

  const [errorLoggingIn, setErrorLoggingIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorLoggingIn(false);

    LoginApi
      .login(username, password)
      .then((data) => {
        authDispatch({
          type: 'LOGIN_SUCCESS',
          user: {
            id: data.id,
            username: data.username
          }
        });
      })
      .catch((err) => setErrorLoggingIn(true));
  };

  return (
    <StyledWrapper>
      <form className="card">
        <div className="card-body">
          <div className="header-login">
            <h2 style={{fontSize: "24px", marginBlock: "0px"}}>LOGIN</h2>
          </div>
          <div className="input-div">
            <IconUser size={20}/>
            <input 
              type="text" 
              name="username" 
              placeholder="USERNAME" 
              onChange={(e) => setUsername(e.target.value)} 
              autoComplete="off" 
              required
            />
          </div>
          <div className="input-div">
            <IconShieldLock size={20}/>
            <input 
              type="password" 
              name="password" 
              placeholder="PASSWORD" 
              name="password" 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <button type="submit" onClick={handleLogin} className="btn-login">LOGIN</button>
          {errorLoggingIn ? (
            <span className="error-msg">Invalid credentials!</span>
          ): null}
        </div>
      </form>
    </StyledWrapper>
  )
}

export default LoginPage;