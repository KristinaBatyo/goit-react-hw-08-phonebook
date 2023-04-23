import { isUserLogin } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operation';
import LoginForm from './LoginForm';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin)
  const dispatch = useDispatch();
  const handleLogin = (data) => {
    dispatch(login(data));
  }
  
  if (isLogin) {
    return <Navigate to='/contacts'/>
  }

  return (
    <div>
      <h1>Login page</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage ;
