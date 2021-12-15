import React, {useState, useReducer, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      state.isLoading = false
      state.userLoggedIn = true
      state.currentUser = action.user
      return {...state}
    }
  }
}

const AuthContext = React.createContext();

const initialState = {
  isLoading: true,
  userLoggedIn: false,
  currentUser: null
};

export const AuthProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let navigate = useNavigate();
  
  useEffect(() => {
    if(state.userLoggedIn ) {
      navigate('/assessment');
    }
  }, [state]);

  return <AuthContext.Provider value={[state, dispatch]} {...props}/>;
}

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }

  return context;
};

export default AuthProvider;