import{AppContainer} from './App.styled';
import { Navbar } from 'components/navbar/Navbar';
import UserRoutes from 'UserRoutes';

export const App = () => {


  return (
    <AppContainer>
      <Navbar />
      <UserRoutes/>
    </AppContainer>
  );
  }