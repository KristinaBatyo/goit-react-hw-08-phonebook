import User from "components/user-menu/UserMenu"
import UserAuth from "components/user/UserAuth"
import { useSelector } from 'react-redux';
import { isUserLogin } from "redux/auth/auth-selectors";

export const Navbar = () => {
    const isLogin = useSelector(isUserLogin);
    
    return (
      <>
        {!isLogin && <UserAuth />}
        {isLogin && <User />}
      </>
    );
}