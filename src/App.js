import { useState } from "react";
import "./styles.css";

const Counter = ({ startFrom }) => {
  const [cont, setCount] = useState(startFrom);
  const [input, setInput] = useState(startFrom);
  // const oncha=

  return (
    <div>
      <h1>{cont}</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => {
          setInput(Number(e.target.value));
        }}
      />
      <br />
      <button onClick={() => setCount(cont + input)}>inc</button>
      <button onClick={() => setCount(cont - input)}>dec</button>
      <button
        onClick={() => {
          setCount(startFrom);
          setInput(startFrom);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default function App() {
  const startFrom = 0;
  return (
    <div className="App">
      <Counter startFrom={startFrom} />
      <Counter startFrom={startFrom} />
    </div>
  );
}
