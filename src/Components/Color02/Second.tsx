import { useRecoilState } from "recoil";
import {ColorState} from './Color.Atom.ts';
const Second = () => {
 

  const [value, setValue] = useRecoilState(ColorState);

  return (
    <>
      <input
        type="color"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        className={`m-4 flex gap-4 w-96 h-96`}
        style={{ backgroundColor: value }}
      ></div>
    </>
  );
};

export default Second;
