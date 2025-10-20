import {useNavigate} from "react-router";

export const MenuComponent = () => {
  const navigate=useNavigate()
const goToLoginPage=()=>{navigate('login')}
    return (
        <div>
        <button onClick={goToLoginPage}>Login</button>
        </div>
    );
};
