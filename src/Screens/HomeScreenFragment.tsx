import { useNavigate } from "react-router-dom";
import MyButton from "../ui/MyButton";
// import { useRecoilValue } from "recoil";
// import { ColorState } from "../Components/Color02/Color.Atom";


function HomeScreenFragment() {
  const navigate=useNavigate();
//   const value=useRecoilValue(ColorState);

//   console.log(value);
  return (
     <div>

        <h2> Welcome To Projects</h2>

        <MyButton size='M' onClick={()=>{navigate('/first')}} text="First Project"/>
        <MyButton size='M' onClick={()=>{navigate('/second')}} text="Second Project"/>
        <MyButton size='M' onClick={()=>{navigate('/third')}} text="Third Project"/>
      
    </div>
  );
}

export default HomeScreenFragment;
