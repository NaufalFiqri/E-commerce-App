import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Book = ({ book }) => {

  return (
    <div className="book">
      <a href="/books/1">
        <figure className="book_img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </a>
      <div className="book__title">
        <a href="/books/1" className="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">
        {
            new Array(Math.floor(book.rating)).fill(0).map((_, index) =>  <FontAwesomeIcon icon="star" key={index} />)
            // Math.floor() == if 4.5 = 4, 3.5 = 3
        }
        {
          !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt" />
          // if number is NOT integer, PRINT half star
        }
      </div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">RM{book.originalPrice.toFixed(2)}</span>
            RM{book.salePrice.toFixed(2)}
            {/* .toFixed() == number of decimal places */}
          </>
        ) : (
            /* : == otherwise */
          <> RM{book.originalPrice} </>
        )}
      </div>
    </div>
  );
};

export default Book;
