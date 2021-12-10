export const requiredValidator = (value: string | undefined) => {
  if (!value) {
    return "Обов'язкове поле";
  }
  return value.length > 0 ? '' : "Обов'язкове поле";
};
export const passwordValidator = (value: string | undefined) => {
  if (!value) {
    return 'Довжина пароля 6 - 12 символів';
  }
  return value.length > 5 && value.length < 13
    ? ''
    : 'Довжина пароля 6 - 12 символів';
};
export const emailValidatotr = (value: string | undefined) => {
  if (!value) {
    return 'Введіть корректний Email';
  }
  const regex = new RegExp(
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
  );
  return regex.test(value) ? '' : 'Введіть корректний Email';
};
