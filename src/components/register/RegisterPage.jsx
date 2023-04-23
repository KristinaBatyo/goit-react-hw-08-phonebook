import { isUserLogin } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/auth-operation';
import RegisterForm from './RegisterForm';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin)
  const dispatch = useDispatch();
  const handleSignup = (data) => {
    dispatch(signup(data));
  }
  
  if (isLogin) {
    return <Navigate to='/contacts'/>
  }

  return (
    < div >
      <h1>Register page</h1>
      <RegisterForm onSubmit={handleSignup}/>
    </ div>
  );
};

export default RegisterPage;