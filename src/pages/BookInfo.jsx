import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const BookInfo = () => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <a href="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </a>
              <a href="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </a>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
                  alt=""
                  className="book__selected--ig"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  Crack the Coding Interview
                  <FontAwesomeIcon icon="star" />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
