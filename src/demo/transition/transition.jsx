import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "./transition.scss";

export function TransitionDemo() {
  const timeout = 2000;

  const [flag, setFlag] = useState(true);

  return (
    <div className="transition-demo">
      <Transition in={flag} timeout={timeout}>
        {(state) => {
          console.log(state);

          return (
            <div
              className={`box ${state}`}
              style={{
                transition: `${timeout}ms`,
              }}
            ></div>
          );
        }}
      </Transition>
      <div className="btn" onClick={() => setFlag(!flag)}>
        toggle
      </div>
    </div>
  );
}
