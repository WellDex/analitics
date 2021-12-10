import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';

interface IHeaderComponent {
  isAuth: boolean;
}

const HeaderComponent = ({isAuth}: IHeaderComponent) => {
  const auth = useContext(AuthContext);
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <h1 className="header-logo">Моя аналітика</h1>
          {isAuth && (
            <button className="header-button" onClick={auth.logout}>
              <i className="material-icons">logout</i>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
