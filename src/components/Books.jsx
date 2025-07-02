/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useEffect, useState } from "react";

const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books";

function Books() {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books", {
        
    });
  }, []);

  return (
    <div>
      <h1>Welcome to BookBuddy</h1>

      <div>
        <div></div>
      </div>
    </div>
  );
}

export default Books;
