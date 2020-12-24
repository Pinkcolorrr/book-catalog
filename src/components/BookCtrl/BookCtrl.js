import "./BookCtrl.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function BookCtrl(props) {
  return (
    <div className="book-ctrl">
      <Link className="book-ctrl-btn" to={`/home/${props.bookKey}`}>
        <FontAwesomeIcon icon={faPen} />
      </Link>

      <button className="book-ctrl-btn" type="button" onClick={props.setActive}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}

export default BookCtrl;
