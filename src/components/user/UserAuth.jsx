// import { NavLink } from "react-router-dom"
import { Link } from "./UserAuth.styled";

const UserAuth = () => {
    return (<div>
        <Link to="/register" >Register</Link> |
        <Link to="/login">Login</Link>
</div>)
}

export default UserAuth;