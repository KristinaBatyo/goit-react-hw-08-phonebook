import{AppContainer} from './App.styled';
import { Routes, Route } from 'react-router-dom';
import UserAuth from 'components/user/UserAuth';
import User from 'components/user/UserMenu';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/auth-selectors';

import Contacts from 'components/contacts/Contacts';
import RegisterPage from 'components/register/RegisterPage';
import LoginPage from 'components/login/LoginPage';


export const App = () => {
  const isLogin = useSelector(isUserLogin);
  
  return (
    <AppContainer>
      {!isLogin && <UserAuth />}
      {isLogin && <User />}

      <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AppContainer>
  );
  }