import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authActions";

const usePresenter = () => {

    const dispatch = useDispatch();


    const handleLogin = () => {
      dispatch(login());
    };
    
    return {
        handleLogin
    };
}      
export default usePresenter;