import "./BookCtrl.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class BookCtrl extends React.Component {
  render() {
    return (
      <div className="book-ctrl">
        <Link className="book-ctrl-btn" type="button" to="/changebook">
          <FontAwesomeIcon icon={faPen} />
        </Link>

        <button
          className="book-ctrl-btn"
          type="button"
          onClick={this.props.setActive}
        >
          {" "}
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    );
  }
}

export default BookCtrl;
