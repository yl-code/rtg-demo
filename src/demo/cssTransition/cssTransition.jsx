import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./cssTransition.scss";

export function CssTransitionDemo() {
  const timeout = 3000;

  const [flag, setFlag] = useState(true);

  return (
    <div className="cssTransition-demo">
      <CSSTransition
        in={flag}
        timeout={timeout}
        classNames="my"
        appear
        onEnter={(node, isAppearing) => {
          console.log(`onEnter ${node.clientWhidth}`, isAppearing);
        }}
        onEntering={(node, isAppearing) => {
          console.log(`onEntering ${node.clientWhidth}`, isAppearing);
        }}
        onEntered={(node, isAppearing) => {
          console.log(`onEntered ${node.clientWhidth}`, isAppearing);
        }}
        onExit={(node, isAppearing) => {
          console.log(`onExit ${node.clientWhidth}`, isAppearing);
        }}
        onExited={(node, isAppearing) => {
          console.log(`onExited ${node.clientWhidth}`, isAppearing);
        }}
      >
        <div className="box" style={{ transition: `${timeout}ms` }}></div>
      </CSSTransition>

      <div className="btn" onClick={() => setFlag(!flag)}>
        toggle
      </div>
    </div>
  );
}
