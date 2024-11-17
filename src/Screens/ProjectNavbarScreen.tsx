import { useNavigate } from "react-router-dom";
import MyButton from "../ui/MyButton";


function ProjectNavbarScreen() {
  const navigate=useNavigate();

  const OpenFirstProject=()=>{
      navigate('/first')
  }
 
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">

          <h2> Welcome To Projects</h2>

        <MyButton size='M' onClick={OpenFirstProject} text="First Project"/>
      
    </div>
  );
}

export default ProjectNavbarScreen;
