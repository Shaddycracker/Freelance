import {Outlet, RouterProvider,createBrowserRouter } from "react-router-dom";
import First from "./Components/Value01/First";
import Second from "./Components/Color02/Second";
import Third from "./Components/TodoApp03/Third";
import HomeScreenFragment from "./Screens/HomeScreenFragment";
import Navbar from './Screens/Navbar';
import CreateTodo from "./Components/TodoApp03/CreateTodo";
import PrintTodo from "./Components/TodoApp03/PrintTodo";


const App=()=>{
    const Route=createBrowserRouter([
      {
        path:"/",
        element:<Navbar/>,
        children:[
          {
          path:"/",
          element:<HomeScreenFragment/>,

          }
          ,{
            path:"/first",
            element:<First/>
    
          },{
            path:'/Second',
            element:<Second/>
          },{
            path:"/third",
            element: <Outlet/>,
            children:[
              {
                path:"",
                element:<Third/>
              },
              {
                path:"create",
                element:<CreateTodo/>
              },{
                 path:"display",
                 element:<PrintTodo/>
              }
            ]
          }
        ]

      },
      
      
     ])
 
  return (
 

  <RouterProvider router={Route}/>
 
  );
}

export default App;
