import { useNavigate } from "react-router-dom";
import MyButton from "../ui/MyButton";


function HomeScreenFragment() {
  const navigate=useNavigate();

 
  return (
     <>

          <h2> Welcome To Projects</h2>

        <MyButton size='M' onClick={()=>{navigate('/first')}} text="First Project"/>
        <MyButton size='M' onClick={()=>{navigate('/second')}} text="Second Project"/>
        <MyButton size='M' onClick={()=>{navigate('/third')}} text="Third Project"/>
      
    </>
  );
}

export default HomeScreenFragment;
