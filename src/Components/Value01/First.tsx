import { atom, useRecoilState } from "recoil";
import MyButton from "../../ui/MyButton";

function First() {
  const CounterState = atom({
    key: "CounterValue",
    default: 0,
  });

  const [value, setValue] = useRecoilState(CounterState);

  const Subtract = () => {
     setValue(prev=>prev-1)
  };
  const Addition = () => {
    setValue(prev=>prev+1)
 };
 const Multiply = () => {
  setValue(prev=>prev*10)
};
const Division = () => {
  setValue(prev=>prev/10)
};

  return (
    <>
    
      <h2 className="m-4 min-w-96 text-center text-2xl"> <span className="font-extrabold text-2xl">State :</span>  {Math.floor(value)}</h2>
      <div className="m-4 flex gap-4">
        <MyButton size="M" onClick={Addition} text="+" />
        <MyButton size="M" onClick={Subtract} text="-" />
        <MyButton size="M" onClick={Multiply} text="*" />
        <MyButton size="M" onClick={Division} text="/" />
      </div>
   </>
  );
}

export default First;
