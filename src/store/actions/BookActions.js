// import axios from 'axios';
import { BOOK_FETCH_ALL ,BOOK_FETCHBYID ,SET_SEARCH_QUERY ,SET_SEARCH_RESULTS ,FETCH_BOOKS_BY_CATEGORY} from "./ActionConstants"
import { fetchAllBooks , fetchBookById ,fetchAllBooksByCategory} from "../../services/BookServices"

export function getAllBooks()
{
    return(dispatch) => {
        return fetchAllBooks().then(
            response =>
            {
                dispatch(getAllBooksSuccess(response.data))
            }
        )
    }
}

export function getAllBooksSuccess(data)
{
    const booksWithImage = data.map(book => {
        return { ...book, image: `data:image/jpeg;base64,${book.image}` };
      });
    return(
        {
            type: BOOK_FETCH_ALL,
            payload: booksWithImage
        }

    )
}

export function getBookById(bookId)
{
    return(dispatch) => {
        return fetchBookById(bookId).then(
            response =>
            {
                dispatch(getBookByIdSuccess(response.data))
                console.log(response.data);
            }
        )
    }
}

export function getBooksByCategory(category)
{
    return(dispatch) => {
        return fetchAllBooksByCategory(category).then(
            response =>
            {
                dispatch(getBooksByCategorySuccess(response.data))
                console.log(response.data);
            }
        )
    }
}

export function getBooksByCategorySuccess(data)
{
    const booksWithImage = data.map(book => {
        return { ...book, image: `data:image/jpeg;base64,${book.image}` };
      });
    return(
        {
            type: FETCH_BOOKS_BY_CATEGORY,
            payload: booksWithImage
        }

    )
}

export function getBookByIdSuccess(data)
{

    // Convert the book image to Base64 encoding
  const base64Image = `data:image/jpeg;base64,${data.image}`;

  // Create a new book object with the image property replaced by the Base64 encoded image
  const bookWithBase64Image = { ...data, image: base64Image };
    
    return(
        {
            type: BOOK_FETCHBYID,
            payload: bookWithBase64Image
        }

    )
}

export function setSearchQuery(searchText) {
    return {
      type: SET_SEARCH_QUERY,
      payload: searchText,
    };
  }
  
  export function setSearchResults(results) {
    return {
      type: SET_SEARCH_RESULTS,
      payload: results,
    };
  }


