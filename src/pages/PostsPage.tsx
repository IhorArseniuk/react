import {FunctionDataMaper} from "../components/FunctionDataMaper.tsx";
import {urls} from "../urls/Urls.tsx";

export const PostsPage = () => {
    return (
        <><FunctionDataMaper fetchUrl={urls.posts} dataArrName={'posts'}/></>
    );
};
