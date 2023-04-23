import{AppContainer} from './App.styled';
import { Routes, Route } from 'react-router-dom';
import UserAuth from 'components/user/UserAuth';
import User from 'components/user/UserMenu';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/auth-selectors';
import { lazy } from 'react';
import { SharedLayout } from 'components/layout/SharedLayout';

const Contacts = lazy(() => import('components/contacts/Contacts'));
const RegisterPage = lazy(() => import('components/register/RegisterPage'));
const LoginPage = lazy(() => import('components/login/LoginPage'));


export const App = () => {
  const isLogin = useSelector(isUserLogin);
  
  return (
    <AppContainer>
      {!isLogin && <UserAuth />}
      {isLogin && <User />}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route path="/" element={<User />} /> */}
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </AppContainer>
  );
  }