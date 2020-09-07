import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

/* 
This is a first screen that is shown to user and  it return null
(displays nothing)..This screen is very helpful to decide whether
we show user logged in state or show signup screen based on whether 
token present on user mobile or not
*/
const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []); /* this blank array makes sure that it executes only once.. */
  

  return null;
};

export default ResolveAuthScreen;
