import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import "./cssTransition.scss";

export function CssTransition() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="cssTransition">
      {showButton && (
        <Button onClick={() => setShowMessage(true)} size="lg">
          Show Message
        </Button>
      )}

      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          Animated alert message
        </Alert>
      </CSSTransition>
    </div>
  );
}
