import {useCallback, useEffect, useState} from 'react';

const storageName = 'userData';

type LocalStorageType = {
  password: string;
  token: string;
  email: string;
};

type UseAuthType = () => {
  logout: () => void;
  ready: boolean;
  login: (jwtToken: string) => void;
  token: string | null;
};

export const useAuth: UseAuthType = () => {
  const [token, setToken] = useState<string | null>(null);
  const [ready, setReady] = useState<boolean>(false);

  const login = useCallback((jwtToken: string) => {
    setToken(jwtToken);

    localStorage.setItem(
      storageName,
      JSON.stringify({
        token,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);

    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem(storageName) || '[]'
    ) as LocalStorageType;

    if (data && data.token) {
      login(data.token);
    }

    setReady(true);
  }, [login]);

  return {login, logout, token, ready};
};
