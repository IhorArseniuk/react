import  axios from "axios";
import type {UserType} from "../models/jsonPLHold/userType.ts";
import type {PostType} from "../models/jsonPLHold/postType.ts";
import type {CommentType} from "../models/jsonPLHold/commentType.ts";

const axiosInstance= axios.create({
     baseURL:'https://jsonplaceholder.typicode.com/'
 })

export const loadJsonUsers = async () :Promise<UserType[]> =>{
  const {data} = await axiosInstance.get<UserType[]>('users')
    console.log(data)
    return data
}

export const loadJsonPosts = async () : Promise<PostType[]> =>{
     const {data} = await axiosInstance.get<PostType[]>('posts')
    console.log(data)
    return data
}

export const loadJsonComments = async () :Promise<CommentType[]>=>{
    const {data}= await axiosInstance.get<CommentType[]>('comments')
    console.log(data)
    return data
}
