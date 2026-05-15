import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const setDecrese = () => {
    counter > 0 ? setCounter((pre) => pre - 1) : setCounter(0);
  };
  return (
    <>
      <p>{counter}</p>
      <br />
      <button
        onClick={() => {
          setCounter((pre) => pre + 1);
        }}
      >
        Increase
      </button>
      <button onClick={setDecrese}>Decrease</button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </>
  );
}
export default Counter;
