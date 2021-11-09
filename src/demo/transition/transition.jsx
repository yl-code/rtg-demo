import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "./index.scss";

const duration = 3000;

const defaultStyle = {
  transition: `${duration}ms ease-in-out`,
};

const transitionStyles = {
  entering: { opacity: 1, color: "teal" },
  entered: { opacity: 1, color: "red" },
  exiting: { opacity: 0, color: "yellow" },
  exited: { opacity: 1, fontSize: 20 },
};

const Fade = (props) => (
  <Transition in={props.flag} timeout={duration}>
    {(state) => {
      console.log(state);
      return (
        <div
          className="color-box"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          I'm a fade Transition!
        </div>
      );
    }}
  </Transition>
);
export function TransitionDemo() {
  const [flag, setFlag] = useState(false);

  return (
    <div className="transition">
      <Fade flag={flag}></Fade>
      <button onClick={() => setFlag(!flag)}>Click to Enter</button>
    </div>
  );
}
