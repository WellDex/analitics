import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import AnalyticPage from './pages/AnalyticPage';
import AuthPage from './pages/AuthPage';

interface IUseRoutesProps {
  isAuth: boolean;
}

export const UseRoutes = ({isAuth}: IUseRoutesProps) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/analytic" exact>
          <AnalyticPage />
        </Route>
        <Redirect to="/analytic" />
      </Switch>
    );
  }
  return <AuthPage />;
};
