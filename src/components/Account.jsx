/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bookIcon from "../assets/book_icon2.png";

import "../styles/books.css";

import TokenContext from "./TokenContext";

const BASE_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`;

function Account() {
  [reservedBooks, setReservedBooks] = useState(null);
  // [token, setToken] = useState()
  const { token } = useContext(TokenContext);

  useEffect(() => {
    async function getReservedBooks(token) {
      try {
        const res = await fetch(`${BASE_URL}/reservations`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await res.json();
        setReservedBooks(result);
      } catch (error) {
        console.error(error);
      }
    }
    if (token) {
      getReservedBooks(token);
    }
  }, [token]);

  //return button for book return
  async function handleClickReturn(id) {
    console.log("return book" + id);
    try {
      const response = await fetch(`${BASE_URL}/reservations/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: id,
        }),
      });

      const result = await response.json();
      console.log("Return button result: ", result);
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
          {/* <div className="see-details">
                <Link className="see-details-link" to={`/books/${book.id}`}>
                  See details
                </Link>
              </div> */}
          <div className="return-book">
            <button onClick={() => handleClickReturn(book.id)}>Return</button>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      {/* <div>
        <Register setToken={setToken} />
        <Login setToken={setToken} />
      </div> */}

      <div>
        <h2>Your Reserved Book</h2>
        {/* conditional render: checks if reservedBooks has anything */}
        {/* {reservedBooks && (
          <div className="books-container">{mapReservedBooks()}</div>
        )} */}
      </div>
    </>
  );
}

export default Account;
