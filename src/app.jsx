import React from "react";
import { CssTransitionDemo } from "./demo/cssTransition/cssTransition";
import { TransitionDemo } from "./demo/transition/transition";
import { SwitchTransitionDemo } from "./demo/switchTransition/switchTransition";
import { TransitionGroupDemo } from "./demo/transitionGroup/transitionGroup";

export default function app() {
  return (
    <div className="app">
      <h3>Transition-Demo</h3>
      <TransitionDemo></TransitionDemo>
      <hr />

      <h3>CssTransition-Demo</h3>
      <CssTransitionDemo></CssTransitionDemo>

      <SwitchTransitionDemo></SwitchTransitionDemo>
      <TransitionGroupDemo></TransitionGroupDemo>
    </div>
  );
}
