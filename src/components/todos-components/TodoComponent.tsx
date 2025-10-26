import type {DummyTodosType} from "../../models/DummyTodosType.ts";
import type {FC} from "react";

type TodoProp = {
    todo: DummyTodosType
}
export const TodoComponent:FC<TodoProp> = ({todo}) => {

    return (
        <ul>
            {Object.entries(todo).map(([key,value],index)=>{
                if(typeof value === 'object'){
                    return(
                        <ul>
                            <p> {key}</p>
                            {Object.entries(value).map(([key,value],index)=>(
                                <li key={index}>{key}-{String(value)}</li>
                            ))}
                        </ul>
                    )
                }
                if(Array.isArray(value)){
                    return(
                        <ul>
                            { value.map((Item)=>{

                                if (typeof Item ==='object' && Item!==null) {
                                    return (<li>
                                        {Object.entries(Item).map(([obKey, obVal], index) => {
                                            return (
                                                <li key={index}>{obKey}-{String(obVal)}</li>
                                            )
                                        })}
                                    </li> )
                                }})}
                        </ul>
                    )}
                return(
                    <li key={index}>{key}-{String(value)}</li>
                )
            })}
        </ul>
    );
};
