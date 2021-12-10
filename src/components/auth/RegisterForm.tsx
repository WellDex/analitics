import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import IAuthProps from '../../typings/IAuthProps';
import {
  emailValidatotr,
  passwordValidator,
  requiredValidator,
} from '../../validator/validateInput';
import CustomField from '../common/CustomField';

interface IRegisterFormProps {
  register: ({email, password}: IAuthProps) => void;
  error: string;
  isLoading: boolean;
}

const RegisterForm = ({register, error, isLoading}: IRegisterFormProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');

  const onSubmit = (e: any) => {
    setErrorEmail(requiredValidator(email));
    setErrorPassword(requiredValidator(password));
    setErrorEmail(emailValidatotr(email));
    setErrorPassword(passwordValidator(password));

    if (!errorEmail && !errorPassword) {
      register({email, password});
    }

    e.preventDefault();
  };

  useEffect(() => {
    if (email) {
      setErrorEmail(emailValidatotr(email));
    }
  }, [email]);

  useEffect(() => {
    if (password) {
      setErrorPassword(passwordValidator(password));
    }
  }, [password]);

  return (
    <form onSubmit={onSubmit} className="form">
      <h2 className="form-head">Реєстрація</h2>
      <CustomField
        errorText={errorEmail}
        name={'email'}
        label={'Email'}
        type={'text'}
        placeholder={'Введіть свій email'}
        value={email}
        setValue={setEmail}
      />
      <CustomField
        errorText={errorPassword}
        name={'password'}
        label={'Пароль'}
        type={'password'}
        placeholder={'Введіть свій пароль'}
        value={password}
        setValue={setPassword}
      />
      <div className="form-buttons">
        <button
          className="form-buttons__submit"
          type="submit"
          disabled={isLoading}>
          Реєстрація
        </button>
        <NavLink
          to="/email"
          className={`form-buttons__link ${
            isLoading && 'form-buttons__disabled'
          }`}>
          Вхід
        </NavLink>
      </div>
      {error && <p className="form-error">{error}</p>}
    </form>
  );
};

export default RegisterForm;
