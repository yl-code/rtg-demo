import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "./transition.scss";

export function TransitionDemo() {
  const timeout = 500;

  const [flag, setFlag] = useState(true);

  return (
    <div className="transition-demo">
      <Transition
        in={flag}
        timeout={timeout}
        appear={true}
        onEnter={(node, isAppearing) => {
          console.log(`onEnter ${node.tagName}`, isAppearing);
        }}
        onEntering={(node, isAppearing) => {
          console.log(`onEntering ${node.tagName}`, isAppearing);
        }}
        onEntered={(node, isAppearing) => {
          console.log(`onEntered ${node.tagName} `, isAppearing);
        }}
        onExiting={(node) => {
          console.log(`onExiting ${node.tagName}`);
        }}
        onExit={(node) => {
          console.log(`onExit ${node.tagName}`);
        }}
        onExited={(node) => {
          console.log(`onExited ${node.tagName}`);
        }}
      >
        {(state) => {
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
        {flag ? "进入的动画" : "退出的动画"}
      </div>
    </div>
  );
}
