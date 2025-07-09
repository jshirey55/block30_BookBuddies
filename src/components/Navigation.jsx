import { Link } from "react-router-dom";
import bookLogo from "../assets/books.png";
import "../styles/navigation.css";
import { useContext } from "react";

import TokenContext from "./TokenContext";

/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
function Navigation() {
  //token is used to render which links to display based on if user has logined/register or can access accounts page
  const { token } = useContext(TokenContext);

  return (
    <div id="navbar">
      <div className="logo-name">
        <img id="logo-image" src={bookLogo} />
        <span>BookBuddies</span>
      </div>
      <Link className="links" to="/books">
        Books
      </Link>
      {/* //ternary operator that chooses which set of links to render based on if
      there is a token value */}
      {token ? (
        <>
          <Link className="links" to="#" style={{ visibility: "hidden" }}>
            Blank
          </Link>
          <Link className="links" to="/account">
            Account
          </Link>
        </>
      ) : (
        <>
          <Link className="links" to="/register">
            Register
          </Link>
          <Link className="links" to="/login">
            Login
          </Link>
        </>
      )}
    </div>
  );
}

export default Navigation;
