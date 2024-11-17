import { atom, useRecoilState } from "recoil";

import { Link } from "react-router-dom";

const Second=()=>{

  const ColorState = atom({
    key: "CounterValue",
    default: "#000",
  });

  const [value, setValue] = useRecoilState(ColorState);

  

  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Link className="text-2xl font-sans font-bold underline decoration-lime-500 text-cyan-900 bg-lime-200 " to="/">
        Back To Home
      </Link>
      <input type="color" value={value} onChange={(e)=>setValue(e.target.value)} />
      <div className={`m-4 flex gap-4 w-96 h-96`} style={{backgroundColor:value}}>
          
      </div>
    </div>
  );
}

export default Second;
