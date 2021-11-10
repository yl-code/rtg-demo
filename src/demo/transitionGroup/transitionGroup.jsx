import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./transitionGroup.scss";

export function TransitionGroupDemo() {
  const timeout = 1000;
  const [items, setItems] = useState([
    { id: 1, text: "1636540898054-item" },
    { id: 2, text: "1636540898054-item" },
    { id: 3, text: "1636540898054-item" },
    { id: 4, text: "1636540898054-item" },
  ]);

  return (
    <div className="transitionGroup-demo">
      <TransitionGroup className="item-box">
        {items.map(({ id, text }) => (
          <CSSTransition key={id} timeout={timeout} classNames="my">
            <div className="item" style={{ transition: `${timeout}ms` }}>
              <span
                className="del-btn"
                onClick={() => {
                  setItems(items.filter((item) => item.id !== id));
                }}
              >
                &times;
              </span>
              {text}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>

      <div
        className="btn"
        onClick={() => {
          setItems([...items, { id: Date.now(), text: `${Date.now()}-item` }]);
        }}
      >
        Add Item
      </div>
    </div>
  );
}
