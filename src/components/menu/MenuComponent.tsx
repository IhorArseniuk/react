import {useNavigate} from "react-router";

export const MenuComponent = () => {
    const navigate=useNavigate()
    const onButtonClick_1 = ()=>{navigate('formCreate')}

    const onButtonClick = ()=>{navigate('cars')}

    return (
        <><div className={'flex gap-3'}>
            <button className={' p-2 text-shadow-lg/20 border-4 rounded-b outline-1 border-red-950'} onClick={onButtonClick}>Show cars</button>
            <button className={' p-2 text-shadow-lg/20 border-4 rounded-b outline-1 border-green-700'} onClick={onButtonClick_1}>Create own car</button>
        </div></>
    );
};
