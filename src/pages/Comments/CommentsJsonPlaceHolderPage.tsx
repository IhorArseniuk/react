import {FunctionDataMaper} from "../../functions-Components/function-data-maper/FunctionDataMaper.tsx";
import {urls} from "../../urls/urls.ts";

export const CommentsJsonPlaceHolderPage = () => {
    return (
        <><FunctionDataMaper fetchUrl={urls.jsonplaceholder.comments}/></>
    );
};
