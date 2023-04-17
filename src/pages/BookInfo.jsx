import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";


const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistsonCart() {
    if (cart) {
      return cart.find((book) => book.id === +id);
    } else {
      return undefined;
    }
  }

  console.log(book);
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem odit impedit vero vitae, incidunt dolore a harum cum
                    consequuntur numquam autem itaque rem iure sit alias
                    adipisci illo dicta? Neque.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem odit impedit vero vitae, incidunt dolore a harum cum
                    consequuntur numquam autem itaque rem iure sit alias
                    adipisci illo dicta? Neque.
                  </p>
                </div>
                {bookExistsonCart() ? (
                  <Link to={`/books/${book.id}`} className="book__link">
                  <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="books__container">
            <div className="row">
              <div className="books__selected--top">
                <h2 className="book__selected--title--top">
                  Recommended books
                </h2>
              </div>
              <div className="books">
                {books
                  .filter((book) => book.rating === 5 && +book.id !== +id)
                  .slice(0, 4)
                  .map((book) => (
                    <Book book={book} key={book.id} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
