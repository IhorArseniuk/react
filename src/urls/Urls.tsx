const baseDummyUrl=import.meta.env.VITE_API_DUMMYJSON
export const urls ={
    dummyJson:{
        users: {
            getAllUsers: baseDummyUrl + 'users',
            getUserCartById:(id:number)=>{
                return baseDummyUrl+'users/'+id+'/carts'
            }
        }
    }
}
