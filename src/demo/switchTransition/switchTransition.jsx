import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./switchTransition.scss";

export function SwitchTransitionDemo() {
  const [mode, setMode] = React.useState("in-out");
  const [state, setState] = React.useState(true);

  return (
    <div className="switchTransition-demo">
      <div className="mode">
        <div className="input-item">
          <input
            type="radio"
            id="in-out"
            value="in-out"
            checked={mode === "in-out"}
            onChange={(e) => {
              setMode(e.target.value);
            }}
          />
          <label htmlFor="in-out">in-out</label>
        </div>
        <div className="input-item">
          <input
            type="radio"
            id="out-in"
            value="out-in"
            checked={mode === "out-in"}
            onChange={(e) => {
              setMode(e.target.value);
            }}
          />
          <label htmlFor="out-in">out-in</label>
        </div>
      </div>

      <SwitchTransition mode={mode}>
        <CSSTransition
          key={state}
          addEndListener={(node, doneCallBack) => {
            node.addEventListener("transitionend", doneCallBack);
          }}
          classNames="my"
        >
          <div className="btn toogle" onClick={() => setState(!state)}>
            {mode === "in-out" ? "先进后出" : "先出后进"}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
