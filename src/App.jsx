import bookLogo from "./assets/books.png";
import { Navigate, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";
import Register from "./components/Register";
import Login from "./components/Login";
import Account from "./components/Account";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>

      {/* This Navigation will display across all pages */}
      <Navigation />

      <Routes>
        {/* Default route '/' will be redirected to '/books' */}
        <Route index element={<Navigate to="/books" replace />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
