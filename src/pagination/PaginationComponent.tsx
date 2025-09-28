import {useSearchParams} from "react-router";

export const PaginationComponent = () => {
  const [query, setQuery]=useSearchParams({count:'10'})
    return (
        <div>
            <button onClick={()=>{
                const count=query.get('count');
                if(count){
                    const currentCount=+count
                setQuery({count:(currentCount-10).toString()})
                }
            }}>prev</button>
            <button onClick={()=>{
                const count=query.get('count');
                if(count){
                    const currentCount=+count;
                    setQuery({count:(currentCount+10).toString()})
            }}}>next</button>
        </div>
    );
};
