import "./BookCtrl.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserContext } from "./../UserContext";

function BookCtrl(props) {
  return (
    <UserContext.Consumer>
      {(value) => (
        <div className="book-ctrl">
          <Link
            className="book-ctrl-btn"
            to={`/home/changebook/${props.bookKey}`}
          >
            <FontAwesomeIcon icon={faPen} />
          </Link>

          <button
            className="book-ctrl-btn"
            onClick={value ? props.setActive : null}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
    </UserContext.Consumer>
  );
}

export default BookCtrl;
