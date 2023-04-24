import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operation';
import { useEffect } from 'react';


const AuthProvider = ({children}) => {
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(current());
      }, []);
    
    return (
        <>{ children}</>
    )
  
}

export default AuthProvider;