import{AppContainer} from './App.styled';
import { Routes, Route } from 'react-router-dom';
import Contacts from 'components/contacts/Contacts';
import RegisterPage from 'components/register/RegisterPage';
import LoginPage from 'components/login/LoginPage';
import { Navbar } from 'components/navbar/Navbar';

export const App = () => {


  return (
    <AppContainer>
      <Navbar/>

      <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AppContainer>
  );
  }