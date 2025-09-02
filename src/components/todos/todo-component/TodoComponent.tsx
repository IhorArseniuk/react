import type {TodoType} from "../../../models/todoModel.ts";
import type {FC} from "react";

type TodoProps={
    todo:TodoType
}
export const TodoComponent :FC<TodoProps>= ({todo}) => {
    return (
        <div className='border-2 border-amber-700  bg-cyan-600 align-top'>
              <h1 className='text-violet-700'>{todo.id}</h1>
            <p className='text-emerald-800'>{todo.todo}</p>
            <h2 className='text-lime-500'>{String(todo.completed)}</h2>
        </div>
    );
};
