import {useNavigate} from "react-router";

export const HomeComponent = () => {
   const navigate=useNavigate()
    return (
        <>
        <button onClick={()=>navigate('resource')}>Go to resource</button>
        </>
    );
};
