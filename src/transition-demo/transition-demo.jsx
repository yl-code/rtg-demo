import React, { useState } from "react";
import { Transition } from "react-transition-group";

const duration = 3000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1, color: "teal" },
  entered: { opacity: 1, color: "red" },
  exiting: { opacity: 0, color: "yellow" },
  exited: { opacity: 1, fontSize: 20 },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        I'm a fade Transition!
      </div>
    )}
  </Transition>
);
export function TransitionDemo() {
  const [inProp, setInProp] = useState(false);

  return (
    <div>
      <Fade in={inProp}></Fade>
      <button onClick={() => setInProp(!inProp)}>Click to Enter</button>
    </div>
  );
}
