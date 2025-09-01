import type {PostType} from "../models/postType.ts";
const baseUrl =import.meta.env.VITE_API_JSONPLACEHILDER
async function getPosts ():Promise<PostType[]>{
    const posts = await fetch(baseUrl+'/posts')
                       .then(res => res.json())
return posts;
}
export {getPosts};
