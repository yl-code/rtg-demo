import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./switchTransition.scss";

export function SwitchTransitionDemo() {
  // const modes = ["out-in", "in-out"];

  const [mode, setMode] = React.useState("out-in");
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
          <label for="in-out">in-out</label>
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
          <label for="out-in">out-in</label>
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
          <div className="btn" onClick={() => setState(!state)}>
            toggle
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
