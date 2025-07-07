import { Link } from "react-router-dom";
import bookLogo from "../assets/books.png";
import "../styles/navigation.css";

/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
function Navigation() {
  return (
    <div id="navbar">
      <div className="logo-name">
        <img id="logo-image" src={bookLogo} />
        <span>BookBuddies</span>
      </div>
      <Link className="links" to="/books">
        Books
      </Link>
       <Link className="links" to="/register">
        Register
      </Link>
      <Link className="links" to="/login">
        Login
      </Link>
      <Link className="links" to="/account">
        Account
      </Link>
    </div>
  );
}

export default Navigation;
