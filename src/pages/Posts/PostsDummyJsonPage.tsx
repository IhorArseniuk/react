import {FunctionDataMaper} from "../../functions-Components/function-data-maper/FunctionDataMaper.tsx";
import {urls} from "../../urls/urls.ts";

export const PostsDummyJsonPage = () => {
    return (
        <><FunctionDataMaper fetchUrl={urls.dummyjson.posts} dataArrName={'posts'}/></>
    );
};
