export default function validateLogin(values) {
  let errors = {};
  if (!values.username) {
    errors.username = 'Username Required';
  } else if (values.username.length < 7) {
    errors.username = 'Username must be more than 7 characters';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 7) {
    errors.password = 'Password needs to be more than 7 characters';
  }
  if (!values.email) {
    // errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  return errors;
}
