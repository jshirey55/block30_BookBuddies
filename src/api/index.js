const BASE_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`;

//for Books.jsx component
export async function fetchAllBooks() {
  try {
    const res = await fetch(`${BASE_URL}/books`);
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//for SingleBook.jsx component
export async function fetchSingleBook() {
  try {
    const res = await fetch(`${BASE_URL}/books/${id}`);
    const result = await res.json();
    return result;
  } catch(error) {
    console.error(error);
  }
}

//for Login.jsx component
// export async function fetchLogin() {
//   try {
//     const res = await fetch(`${BASE_URL}/users/login`);
//     const result = await res.json();
//     return result;
//   } catch(error) {
//     console.error(error);
//   }
// }