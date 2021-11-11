import React from "react";
import { CssTransitionDemo } from "./demo/cssTransition/cssTransition";
import { TransitionDemo } from "./demo/transition/transition";
import { SwitchTransitionDemo } from "./demo/switchTransition/switchTransition";
import { TransitionGroupDemo } from "./demo/transitionGroup/transitionGroup";

export default function app() {
  return (
    <div className="app">
      <div className="demo-box">
        <h2>Transition-Demo</h2>
        <TransitionDemo></TransitionDemo>
      </div>

      <div className="demo-box">
        <h2>CssTransition-Demo</h2>
        <CssTransitionDemo></CssTransitionDemo>
      </div>

      <div className="demo-box">
        <h2>SwitchTransition-Demo</h2>
        <SwitchTransitionDemo></SwitchTransitionDemo>
      </div>

      <div className="demo-box">
        <h2>TransitionGroup-Demo</h2>
        <TransitionGroupDemo></TransitionGroupDemo>
      </div>
    </div>
  );
}
