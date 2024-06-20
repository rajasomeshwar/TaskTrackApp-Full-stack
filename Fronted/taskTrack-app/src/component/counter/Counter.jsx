import { useState } from "react";
import "./Counter.css";
export default function Counter() {
  const [count, setcount] = useState(0);
  function hereUpdate(by) {
    setcount(count + by);
  }
  return (
    <>
      <div className="Display">{count}</div>
      <CounterButton by={1} hereUpdate={hereUpdate}></CounterButton>
      <CounterButton by={2} hereUpdate={hereUpdate}></CounterButton>
      <CounterButton by={5} hereUpdate={hereUpdate}></CounterButton>
      <Reset></Reset>
    </>
  );
  function Reset() {
    return (
      <>
        <button
          className="IncButton"
          onClick={() => {
            hereUpdate(-count);
          }}
        >
          Reset
        </button>
      </>
    );
  }
}
export function CounterButton({ by, hereUpdate }) {
  // function updateBy(val) {
  //   setcount(count + val);
  //   console.log(by);
  //   console.log("called happend");
  // }
  return (
    <div>
      <div className="Increament">
        <button
          className="IncButton"
          onClick={() => {
            hereUpdate(by);
          }}
        >
          +{by}
        </button>
        <button
          className="IncButton"
          onClick={() => {
            hereUpdate(-by);
          }}
        >
          -{by}
        </button>
      </div>
    </div>
  );
}
