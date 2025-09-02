import {useEffect, useState} from "react";
import type {TodoType} from "../../../models/todoModel.ts";
import {loadTodos} from "../../../services/DummyApi.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";

export const TodosComponent = () => {
   const[todos, setTodos]=useState<TodoType[]>([])

    useEffect(()=>{
        async function todosApi(){
            const response = await loadTodos()
            setTodos(response)
        }
        todosApi()
    })

    return (
        <div className='grid grid-cols-6 gap-3 p-5'>{
            todos.map((todo)=>(<TodoComponent todo={todo} key={todo.id}/>))
        }</div>
    );
};
