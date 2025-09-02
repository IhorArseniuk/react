import type {PostFetchType} from "../models/postModel.ts";
import type {CommentsDummyType, CommentType} from "../models/commentModel.ts";
import type {TodosDummyType, TodoType} from "../models/todoModel.ts";


const postsUrl=import.meta.env.VITE_API_DUMMYJSON+'/posts'

const endpointComments=import.meta.env.VITE_API_DUMMYJSON+'/comments';

const endpointTodos=import.meta.env.VITE_API_DUMMYJSON+'/todos';

async function loadPosts():Promise<PostFetchType> {
   const posts=await fetch(postsUrl)
       .then(res=>res.json())
    return posts
}

async function loadComments():Promise<CommentType[]>{
    const comments:CommentsDummyType = await fetch(endpointComments)
        .then(res=>res.json())
    return comments.comments
}

async function loadTodos():Promise<TodoType[]>{
    const todosFetch:TodosDummyType = await fetch(endpointTodos)
        .then(res=>res.json())
    return todosFetch.todos
}
export {loadPosts, loadComments, loadTodos}
