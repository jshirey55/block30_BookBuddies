/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useParams } from "react-router-dom";

function SingleBook() {
  //you can useParams to get the SingleBook and fetch the specific book from API based on id
  const { id } = useParams();

  return <div>the book id is {id}</div>;
}

export default SingleBook;
