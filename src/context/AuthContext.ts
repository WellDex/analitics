import {createContext} from 'react';

const noop = () => {};

type AuthContextType = {
  token: string | null;
  login: (jwtToken: string) => void;
  logout: () => void;
  isAuth: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  login: noop,
  logout: noop,
  isAuth: false,
});
