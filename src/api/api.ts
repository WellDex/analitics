import axios from 'axios';
import IAuthProps from '../typings/IAuthProps';

export const instance = axios.create({
  baseURL: 'https://reqres.in/api/',
});

export const authAPI = {
  login: ({email, password}: IAuthProps) => {
    return instance
      .post('login', {
        email: email,
        password: password,
      })
      .then((res) => {
        return {data: res.data, status: res.status};
      })
      .catch((error: any) => {
        const err = {
          data: error.toString(),
          status: 400,
        };
        return err;
      });
  },
  register: ({email, password}: IAuthProps) => {
    return instance
      .post('register', {
        email: email,
        password: password,
      })
      .then((res) => res)
      .catch((error: any) => {
        const err = {
          data: error.toString(),
          status: 400,
        };
        return err;
      });
  },
};
