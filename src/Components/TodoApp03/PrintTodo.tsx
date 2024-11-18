import React from 'react'
import { useRecoilValue } from 'recoil'
import { TodoAtom ,} from './Todo.Atom'
import TodoItem from './TodoItem'

const PrintTodo:React.FC = () => {
    const Todo=useRecoilValue(TodoAtom);

 if(Todo.length==0){
    return (
        <h2> No List Yet </h2>
    )
 }
  return (
    <div className='m-4 flex gap-10px flex-wrap'>
         {Todo.map((item)=>{
            return <TodoItem key={item.id} todo={item}/>
         })}
      
    </div>
  )
}

export default PrintTodo
