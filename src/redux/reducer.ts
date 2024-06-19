import { combineReducers } from "redux";
import { Book } from "../components";
import books from "../data/books.json";
import { AddBookAction, deleteBookAction, EditBookAction } from "./actions";

export interface AppState {
  books: Book[];
}
export const initialState: AppState = {
  books,
};

const booksReducer = (
  state = initialState.books,
  action: AddBookAction | deleteBookAction | EditBookAction
): Book[] => {
  switch (action.type) {
    case "books/addBook":
      return [...state, action.payload];
    case "books/deleteBook":
      return state.filter((book) => book.id !== action.payload.id);
    case "books/editBook":
      return state.map((book) =>
        book.id === action.payload.id ? { ...book, ...action.payload } : book
      );

    default:
      return state;
  }
};

// const filtersInitialState = {
//   status: statusFilters,
// };

// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };
export const rootReducer = combineReducers({
  books: booksReducer,
  // filters: filtersReducer,
});
