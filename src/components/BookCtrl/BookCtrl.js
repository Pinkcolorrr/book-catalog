import "./BookCtrl.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class BookCtrl extends React.Component {
  render() {
    return (
      <div className="book-ctrl">
        <button className="book-ctrl-btn" type="button">
          <FontAwesomeIcon icon={faPen} />
        </button>

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
