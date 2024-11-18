import { atom } from "recoil";

export interface TodoType{

    status: boolean; title: string; desc: string; id: number; 

}
export const TodoAtom=atom<TodoType[]>({
    key:'todo',
    default:[]
})