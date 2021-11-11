import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./cssTransition.scss";

export function CssTransitionDemo() {
  const timeout = 500;

  const [flag, setFlag] = useState(true);
  const [appearing, setAppearing] = useState(false);

  return (
    <div className="cssTransition-demo">
      <CSSTransition
        in={flag}
        timeout={timeout}
        classNames="my"
        appear
        onEnter={(node, isAppearing) => {
          setAppearing(isAppearing);
          console.log(`onEnter ${node.tagName}`, isAppearing);
        }}
        onEntering={(node, isAppearing) => {
          setAppearing(isAppearing);
          console.log(`onEntering ${node.tagName}`, isAppearing);
        }}
        onEntered={(node, isAppearing) => {
          setAppearing(isAppearing);
          console.log(`onEntered ${node.tagName} `, isAppearing);
        }}
        onExit={(_node) => {
          setAppearing(false);
        }}
      >
        <div className="box" style={{ transition: `${timeout}ms` }}></div>
      </CSSTransition>

      <div className="btn" onClick={() => setFlag(!flag)}>
        {appearing ? "入场的动画" : flag ? "进入的动画" : "退出的动画"}
      </div>
    </div>
  );
}
