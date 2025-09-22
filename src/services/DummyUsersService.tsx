
export  const getDummyUsers = async (url:string)=> {
    return await fetch(url).then((res)=>res.json())
};
