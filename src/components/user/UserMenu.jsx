import { getUser } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";

 const User = () => {
    const { email } = useSelector(getUser);

    return (
    <div>
    <p>{email}</p>
    <button>Logout</button>
    </div>
    );
 };
    
export default User;