
import {useAppSelectorHook} from "../redux/hooks/UseAppSelectorHook.tsx";
import {useDispatchHook} from "../redux/hooks/UseDispatchHook.tsx";
import {useEffect} from "react";
import {loadComments} from "../redux/slices/commentsSlice/LoadComments.ts";

export const CommentsJsonPage = () => {

    const comments = useAppSelectorHook(state=> state.comments.comments)
const dispatch= useDispatchHook()

    useEffect(() => {
        dispatch(loadComments())

    }, [dispatch])

    return (
        <>
            {comments && comments.map((comment)=>(
                <div key={comment.id}>{comment.name}<br/>{comment.body}</div>
            ))}
        </>
    );
};
