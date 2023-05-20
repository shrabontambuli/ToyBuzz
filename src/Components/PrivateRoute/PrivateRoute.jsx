import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const PrivateRoute = ({children}) => {

        const {user, loading} = useContext(AuthContext);
        const location = useLocation();
        
        if(loading){
            return <progress className="progress w-full mx-auto"></progress>
        }
        
        if(user){
            return children;
        }
        return <Navigate state={{from: location}} to="/login" replace></Navigate>
    
};

export default PrivateRoute;