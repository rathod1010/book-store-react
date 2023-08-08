

import { BOOK_FETCH_ALL, BOOK_FETCHBYID, SET_SEARCH_QUERY, SET_SEARCH_RESULTS ,FETCH_BOOKS_BY_CATEGORY} from "../actions/ActionConstants";

const initialState = {
  books: [],
  book: null,
  searchResults: [],
  booksbyCategory:[]
};

export default function BookReducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_FETCH_ALL:
      return {
        ...state,
        books: action.payload,
      };

    case BOOK_FETCHBYID:
      return {
        ...state,
        book: action.payload,
      };

    case SET_SEARCH_QUERY:
      const searchQuery = action.payload;
      const filteredResults = state.books.filter(
        (book) =>
          book.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...state,
        searchResults: filteredResults,
      };

    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };

    case FETCH_BOOKS_BY_CATEGORY:
     return {
            ...state,
            booksbyCategory:action.payload

        };

    default:
      return state;
  }
}
