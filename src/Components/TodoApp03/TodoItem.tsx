import React from 'react'
import {TodoType} from './Todo.Atom';

const TodoItem:React.FC<{todo:TodoType}>= ({todo}) => {
  return (
    <ul className="max-w-md divide-y divide-black-200">
    <li className="pb-3 sm:pb-4">
       <div className="flex items-center space-x-4 rtl:space-x-reverse border-dashed border p-2">
          <div className="flex-shrink-0">
             <img className="w-8 h-8 rounded-full" src="https://cdn.dribbble.com/users/111709/screenshots/2032133/media/94bcf225589742d4ffed61a8295517ef.jpg?resize=400x300&vertical=center" alt="Neil image"/>
          </div>
          <div className="flex-1 min-w-0">
             <p className="text-sm font-medium text-gray-900 truncate ">
                {todo.title}
             </p>
             <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {todo.desc}
             </p>
          </div>
          <button className="inline-flex items-center text-base font-semibold text-gray-900 bg-gray-400 p-2">
              {todo.status?"Complete":"Incomplete"}
          </button>
       </div>
    </li>
  </ul>
  )
}

export default TodoItem
