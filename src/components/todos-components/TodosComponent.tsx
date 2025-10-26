import {useEffect, useState} from "react";
import {DummyRefresh, getDummyResource} from "../../service/DummyService.ts";

import type {DummyTodosType} from "../../models/DummyTodosType.ts";
import {TodoComponent} from "./TodoComponent.tsx";

export const TodosComponent = () => {
    const [todos, setTodos]=useState<DummyTodosType[]>([])
    useEffect(() => {
        getDummyResource('todos')
            .then(res=>{
                if(res.todos){
                    setTodos(res.todos)
                }
            })
            .catch(errors =>{
                console.log(errors)
                DummyRefresh()
                    .then(()=>{
                        getDummyResource('todos')
                            .then(res=>{
                                if(res.todos){
                                    setTodos(res.todos)
                                }
                            })
                    })
            })
    },[])
    return (
        <div>
            <b>Todos</b>
            {todos.map((todo)=><TodoComponent key={todo.id} todo={todo}/>)}
        </div>
    );
};
