import React from 'react';
import FooterComponent from './components/common/FooterComponent';
import HeaderComponent from './components/common/HeaderComponent';
import Preloader from './components/common/Preloader';
import {AuthContext} from './context/AuthContext';
import {useAuth} from './hooks/authHook';
import {UseRoutes} from './routes';

const App = () => {
  const {token, login, logout, ready} = useAuth();
  const isAuth = !!token;

  if (!ready) {
    return <Preloader />;
  }

  return (
    <AuthContext.Provider value={{token, login, logout, isAuth}}>
      <HeaderComponent isAuth={isAuth} />
      <div className="container">
        <UseRoutes isAuth={isAuth} />
      </div>
      <FooterComponent />
    </AuthContext.Provider>
  );
};

export default App;
