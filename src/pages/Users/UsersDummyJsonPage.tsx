import {FunctionDataMaper} from "../../functions-Components/function-data-maper/FunctionDataMaper.tsx";
import {urls} from "../../urls/urls.ts";

export const UsersDummyJsonPage = () => {
    return (
        <><FunctionDataMaper fetchUrl={urls.dummyjson.users} dataArrName={'users'}/></>
    );
};
