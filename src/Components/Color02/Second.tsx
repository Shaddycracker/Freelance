import { atom, useRecoilState } from "recoil";

const Second = () => {
  const ColorState = atom({
    key: "CounterValue",
    default: "#000",
  });

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
