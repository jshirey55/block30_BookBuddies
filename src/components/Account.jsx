/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useContext, useEffect, useState } from "react";
import TokenContext from "./TokenContext";

import bookIcon from "../assets/book_icon2.png";
import { fetchReservedBooks } from "../api/index.js";
import "../styles/books.css";

const BASE_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`;

function Account() {
  const [reservedBooks, setReservedBooks] = useState(null);

  const { token } = useContext(TokenContext);

  //fetches all reserved books
  useEffect(() => {
    async function getReservedBooks() {
      try {
        const result = await fetchReservedBooks(token);
        setReservedBooks(result);
      } catch (error) {
        console.error(error);
      }
    }
    if (token) {
      getReservedBooks();
    }
  }, []);

  //return button for book return
  async function handleClickReturn(id) {
    console.log("return book with id: " + id);
    try {
      const response = await fetch(`${BASE_URL}/reservations/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          bookId: id,
        }),
      });
      // console.log(response.body);
      // const result = await response.json();
      // console.log("Return button result: ", result);
      const result = await fetchReservedBooks(token);
      setReservedBooks(result);
    } catch (error) {
      console.error(error);
    }
  }

  //display reserved books
  function mapReservedBooks() {
    return reservedBooks.map((book) => {
      return (
        <div className="single-book" key={book.id}>
          <img id="logo-icon" src={bookIcon} />
          <div className="book-details">
            <span>
              <strong>Title:</strong> {book.title}
            </span>
            <span>
              <strong>Author:</strong> {book.author}
            </span>
          </div>

          <div className="return-book">
            <button
              className="return-button"
              onClick={() => handleClickReturn(book.id)}
            >
              Return
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <div>
        <h2>Your Reserved Books</h2>
        {/* conditional render: checks if reservedBooks has anything */}
        {reservedBooks ? (
          <div className="books-container">{mapReservedBooks()}</div>
        ) : (
          <p style={{ placeSelf: "center" }}>No books reserved.</p>
        )}
      </div>
    </>
  );
}

export default Account;
