import { getUser } from "redux/auth/auth-selectors";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "redux/auth/auth-operation";
import { Button, UserMenu, Mail } from './UserMenu.styled';

 const User = () => {
    const { email } = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogout = () => {
       dispatch(logout());
    }

    return (
    <UserMenu>
    <Mail>{email}</Mail>
    <Button onClick={onLogout}>Logout</Button>
    </UserMenu>
    );
 };
    
export default User;