const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const getEmailValidator = (value) => {
  return EMAIL_REGEX.test(value);
};
export const getNameErrors = () => {
  return ['Enter you name '];
};
export const getEmailErrors = () => {
  return ['Enter a valid email address'];
};
export const getChangePasswordErrors = () => {
  return ['Enter a valid password'];
};
export const getConfirmPasswordErrors = () => {
  return ['Enter a valid confirmed password'];
};
export const getPwdValidator = (value) => {
  return PWD_REGEX.test(value);
};
export const getPwdErrors = () => {
  return [
    '8 to 24 characters.',
    'Must include uppercase and lowercase letters, a number and a special character.',
    'Allowed special characters  ! @ # $ %',
  ];
};
