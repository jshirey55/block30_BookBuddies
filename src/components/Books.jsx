/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useEffect, useState } from "react";
import { fetchAllBooks } from "../api/index.js";
import { Link } from "react-router-dom";
import bookIcon from "../assets/book_icon2.png";

import "../styles/books.css";

function Books() {
  const [books, setBooks] = useState();

  useEffect(() => {
    async function getBooks() {
      //call fetchAllBooks() function from ../api/index.js
      const response = await fetchAllBooks();
      //resonse = array of books
      // console.log(response);
      setBooks(response);
    }
    getBooks();
  }, []);

  //map the array of books and for each book it return: <div className="single-book"> ... </div>
  function mapBooks() {
    

    return books.map((book) => {
      const available = book.available ? book.title :
      <span style={{ color: 'red' }}>{book.title}</span>
      
      return (
        <div className="single-book" key={book.id}>
          <img id="logo-icon" src={bookIcon} />
          <div className="book-details">
            <span>
              <strong>Title:</strong> {available}
            </span>
            <span>
              <strong>Author:</strong> {book.author}
            </span>
          </div>
          <div className="see-details">
            <Link className="see-details-link" to={`/books/${book.id}`}>
              See details
            </Link>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <h2>Welcome to BookBuddies</h2>
      {/* Conditional Render: checks if there is something in 'books' before it renders the mapBooks() */}
      {books && <div className="books-container">{mapBooks()}</div>}
    </div>
  );
}

export default Books;
