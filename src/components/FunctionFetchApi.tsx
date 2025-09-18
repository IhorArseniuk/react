export async function functionFetchApi  (url:string)  {
    if(url) {
        const result =await fetch(url)
            .then((res) => res.json())
        return result
    }
}
