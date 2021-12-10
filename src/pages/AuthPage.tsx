import React, {useContext, useState} from 'react';
import {Redirect, Route, Switch, useHistory} from 'react-router';
import {authAPI} from '../api/api';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import {AuthContext} from '../context/AuthContext';
import IAuthProps from '../typings/IAuthProps';

const AuthPage = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorReq, setErrorReq] = useState('');

  const login = async ({email, password}: IAuthProps) => {
    try {
      setIsLoading(true);

      setTimeout(async () => {
        const res = await authAPI.login({email, password});
        console.log(res);

        if (res.status === 200) {
          auth.login(res.data && res.data.token);
        } else {
          setErrorReq(res.data);
        }
        setIsLoading(false);
      }, 2000);
    } catch (e: any) {
      setIsLoading(false);
      setErrorReq(e.toString());
    }
  };
  const register = async ({email, password}: IAuthProps) => {
    try {
      setIsLoading(true);

      setTimeout(async () => {
        const res = await authAPI.register({email, password});
        if (res.status === 200) {
          history.push('/login');
        } else {
          setErrorReq(res.data);
        }
        setIsLoading(false);
      }, 2000);
    } catch (e: any) {
      setIsLoading(false);
      setErrorReq(e.toString());
    }
  };

  return (
    <Switch>
      <Route exact path="/login">
        <LoginForm login={login} error={errorReq} isLoading={isLoading} />
      </Route>
      <Route exact path="/register">
        <RegisterForm
          register={register}
          error={errorReq}
          isLoading={isLoading}
        />
      </Route>
      <Redirect to="/login" />
    </Switch>
  );
};

export default AuthPage;
