import {useSearchParams} from "react-router";

export const PaginationComponent = () => {
  const[query,setQuery]=useSearchParams({count:'0'})
    return (
        <div className={'flex flex-row gap-3'}>
            <button className={'border-2 border-red-950 text-black bg-red-600 w-20'} onClick={()=>{
                const count=query.get('count')
              if(count ){
                const currentCount= +count;
                if(currentCount!==0) {
                    setQuery({count: (currentCount - 10).toString()})
                } }
            }}>prev</button>
            <button className={'border-2 border-green-700 text-yellow-200 bg-lime-400 w-20'} onClick={()=>{
                const count=query.get('count')
                if(count){
                    const currentCount=+count;
                    if(currentCount<=208){
                    setQuery({count:(currentCount + 10).toString()})
            }
                }
            }
            }>next</button>
        </div>
    );
};
