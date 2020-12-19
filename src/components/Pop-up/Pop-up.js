import React from "react";
import "./Pop-up.css";

function PopUp(props) {
  const { title, setActive, content } = props;

  return (
    <div className="pop-up">
      <div className="pop-up-body">
        <div className="pop-up-close">
          <button className="pop-up-close-btn" onClick={setActive}>
            X
          </button>
        </div>
        <div className="pop-up-title">{title}</div>
        {content}
      </div>
    </div>
  );
}

export default PopUp;
