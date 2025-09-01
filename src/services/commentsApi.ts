import type {CommentModel} from "../models/comentModel.ts";

const commentsUrl=import.meta.env.VITE_API_JSONPLACEHOLDER+'/comments'
async function getComments ():Promise<CommentModel[]>{
    const comments = await fetch(commentsUrl)
        .then(response=>response.json())
    return comments;
}
export{getComments};
