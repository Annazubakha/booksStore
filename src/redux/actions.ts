import { nanoid } from "nanoid";

export type AddBookAction = {
  type: "books/addBook";
  payload: {
    id: string;
    title: string;
    price: string;
    category: string;
    description: string;
  };
};
export type EditBookAction = {
  type: "books/editBook";
  payload: {
    id: string;
    title: string;
    price: string;
    category: string;
    description: string;
  };
};
export type deleteBookAction = {
  type: "books/deleteBook";
  payload: {
    id: string;
  };
};

export const addBook = (
  title: string,
  price: string,
  category: string,
  description: string
): AddBookAction => {
  return {
    type: "books/addBook",
    payload: {
      id: nanoid(),
      title,
      price,
      category,
      description,
    },
  };
};

export const deleteBook = (id: string): deleteBookAction => {
  return {
    type: "books/deleteBook",
    payload: { id },
  };
};

export const editBook = (
  id: string,
  title: string,
  price: string,
  category: string,
  description: string
): EditBookAction => {
  return {
    type: "books/editBook",
    payload: {
      id,
      title,
      price,
      category,
      description,
    },
  };
};
