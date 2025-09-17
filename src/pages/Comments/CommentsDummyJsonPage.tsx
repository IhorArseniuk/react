import {FunctionDataMaper} from "../../functions-Components/function-data-maper/FunctionDataMaper.tsx";
import {urls} from "../../urls/urls.ts";

export const CommentsDummyJsonPage = () => {
    return (
        <><FunctionDataMaper fetchUrl={urls.dummyjson.comments} dataArrName={'comments'}/></>
    );
};
