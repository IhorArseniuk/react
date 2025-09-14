export async function unctionFetchApi  (url)  {
    if(url) {
         const result =await fetch(url)
            .then((res) => res.json())
        return result
    }
}
