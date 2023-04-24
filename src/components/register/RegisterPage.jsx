import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operation';
import RegisterForm from './RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = (data) => {
    dispatch(signup(data));
  }

  return (
    < div >
      <h1>Register page</h1>
      <RegisterForm onSubmit={handleSignup}/>
    </ div>
  );
};

export default RegisterPage;
