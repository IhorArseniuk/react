export type TodoType  = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
export type TodosDummyType ={
    todos:TodoType[];
    total:number,
    skip:number,
    limit:number,
}
