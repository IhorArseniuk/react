import {FunctionDataMaper} from "../../functions-Components/FunctionDataMaper.tsx";
import {urls} from "../../urls/urls.ts";

export const UsersJsonPlaceHolderPage = () => {
    return (
        <><FunctionDataMaper fetchUrl={urls.jsonplaceholder.users} /></>
    );
};
