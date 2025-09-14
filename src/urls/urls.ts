const jsonplaceholderUrl=import.meta.env.VITE_API_JSONPLACEHILDER
const dummyjsonUrl=import.meta.env.VITE_API_DUMMYJSON
 export const urls={
    jsonplaceholder:{
        users:jsonplaceholderUrl+'users',
        posts:jsonplaceholderUrl+'posts',
        comments:jsonplaceholderUrl+'comments',
    },
     dummyjson:{
        users:dummyjsonUrl+'users',
        posts: dummyjsonUrl+'posts',
         comments:dummyjsonUrl+'comments'
     }
 }
