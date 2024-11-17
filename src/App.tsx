import {RouterProvider,createBrowserRouter } from "react-router-dom";
import ProjectNavbarScreen from "./Screens/ProjectNavbarScreen";
import First from "./Components/Value01/First";


const App=()=>{
    const Route=createBrowserRouter([
      {
        path:"/",
        element:<ProjectNavbarScreen/>

      },
      {
        path:"/first",
        element:<First/>

      }])
 
  return (
  <RouterProvider router={Route}/>
  );
}

export default App;
