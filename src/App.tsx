import {RouterProvider,createBrowserRouter } from "react-router-dom";
import ProjectNavbarScreen from "./Screens/ProjectNavbarScreen";
import First from "./Components/Value01/First";
import Second from "./Components/Color02/Second";


const App=()=>{
    const Route=createBrowserRouter([
      {
        path:"/",
        element:<ProjectNavbarScreen/>

      },
      {
        path:"/first",
        element:<First/>

      },{
        path:'/Second',
        element:<Second/>
      }
     ])
 
  return (
  <RouterProvider router={Route}/>
  );
}

export default App;
