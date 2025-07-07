import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import TokenContext from "./TokenContext";

const useAuth = () => ({ isLoggedIn: true });

function SingleBook() {
  const { id } = useParams();
  const { isLoggedIn } = useAuth();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { token } = useContext(TokenContext);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(
          `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`
        );
        if (!res.ok) throw new Error("Book not found");
        const data = await res.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  async function handleCheckoutClick(id) {
    // setIsModalOpen(true);
    console.log("reserve book" + id);
    try {
      const response = await fetch(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            bookId: id,
          }),
        }
      );

      const result = await response.json();
      console.log("Reserve button result: ", result);
    } catch (error) {
      console.error(error);
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleConfirmCheckout = () => {
    alert("Book checked out!");
    setIsModalOpen(false);
  };
  return (
    <div className="single-book">
      {loading && <p>Loading book details...</p>}
      {error && <p>Error: {error}</p>}
      {book && (
        <>
          <h2>{book.title}</h2>
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>{book.description}</p>
          {isLoggedIn && (
            <button onClick={() => handleCheckoutClick(book.id)}>
              Checkout
            </button>
          )}
          {/* Modal */}
          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h3>Confirm Checkout</h3>
                <p>
                  Are you sure you want to checkout{" "}
                  <strong>{book.title}</strong>?
                </p>
                <button onClick={handleConfirmCheckout}>Yes</button>
                <button onClick={handleCloseModal}>Cancel</button>
              </div>
            </div>
          )}
        </>
      )}
      {/* Minimal CSS */}
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-content {
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
        .modal-content button {
          margin-right: 1rem;
        }
      `}</style>
    </div>
  );
}
export default SingleBook;
