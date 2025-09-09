 const baseJsonPlaceUrl=import.meta.env.VITE_API_JSONPLACEHILDER

export const jsonPlaceUrl={
    users:{
        allUsers:baseJsonPlaceUrl+'/users',
        userById(id:number) {
            return this.allUsers+'/'+id

        }
    }
 }
