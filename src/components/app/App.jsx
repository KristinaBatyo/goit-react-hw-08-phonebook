// import  User  from "components/user/UserMenu";
import{AppContainer} from './App.styled';
import { Routes, Route } from 'react-router-dom';
import Contacts from "components/contacts/Contacts";
import UserAuth from 'components/user/UserAuth';
import RegisterPage from 'components/register/RegisterPage';
export const App = () => {

  
  return (
    <AppContainer>
      {/* <nav>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/">User</NavLink>
      </nav> */}
<UserAuth/>
      <Routes>
        {/* <Route path="/" element={<User />} /> */}
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </AppContainer>
  );
  }