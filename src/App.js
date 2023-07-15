import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("June 22 2023");
  date.setDate(date.getDate() + count);

  function handleOnReset() {
    setCount(0);
    setStep(1);
    //console.log(count);
    console.log("onhandle reset");
    console.log(count);
    console.log(step);
  }
  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {/* <button onClick={() => setStep((c) => c - 1)}>-</button> */}
        <span>Step:{step}</span>
        {/* <button onClick={() => setStep((c) => c + 1)}>+</button> */}
        {/* <span>Step:{step}</span> */}
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        {/* <span>Count:{count}</span> */}
        <button onClick={() => setCount((c) => c + step)}>+</button>
        {/* {console.log(count)}
        {console.log(step)} */}
        console.log("onclick"); console.log(count);
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleOnReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}
