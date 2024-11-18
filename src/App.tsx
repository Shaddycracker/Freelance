import {RouterProvider,createBrowserRouter } from "react-router-dom";
// import NavbarScreen from "./Screens/NavbarScreen";
import First from "./Components/Value01/First";
import Second from "./Components/Color02/Second";
import Third from "./Components/TodoApp03/Third";
import HomeScreenFragment from "./Screens/HomeScreenFragment";
import Navbar from './Screens/Navbar';


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
            path:"third",
            element: <Third/>
          }
        ]

      },
      
      
     ])
 
  return (
 

  <RouterProvider router={Route}/>
 
  );
}

export default App;
