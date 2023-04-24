import { useDispatch} from 'react-redux';
import { login } from 'redux/auth/auth-operation';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = (data) => {
    dispatch(login(data));
  }


  return (
    <div>
      <h1>Login page</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage ;
