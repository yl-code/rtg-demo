import React from "react";
import { CssTransitionDemo } from "./demo/cssTransition/cssTransition";
import { TransitionDemo } from "./demo/transition/transition";
import { SwitchTransitionDemo } from "./demo/switchTransition/switchTransition";
import { TransitionGroupDemo } from "./demo/transitionGroup/transitionGroup";

export default function app() {
  return (
    <div className="app">
      <div className="demo-box">
        <h3>Transition-Demo</h3>
        <TransitionDemo></TransitionDemo>
      </div>

      <div className="demo-box">
        <h3>CssTransition-Demo</h3>
        <CssTransitionDemo></CssTransitionDemo>
      </div>

      <div className="demo-box">
        <h3>SwitchTransition-Demo</h3>
        <SwitchTransitionDemo></SwitchTransitionDemo>
      </div>

      <div className="demo-box">
        <h3>TransitionGroup-Demo</h3>
        <TransitionGroupDemo></TransitionGroupDemo>
      </div>
    </div>
  );
}
