import {FunctionDataMaper} from "../components/FunctionDataMaper.tsx";
import {urls} from "../urls/Urls.tsx";

export const UsersPage = () => {
    return (
        <><FunctionDataMaper fetchUrl={urls.users} dataArrName={'users'}/></>
    );
};
