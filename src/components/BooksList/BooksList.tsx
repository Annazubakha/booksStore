import { useSelector } from "react-redux";
import { Book, BookItem, EditBookForm, Modal, SortBy } from "../index";
import { getBooks } from "../../redux/selectors";
import { useModal } from "../../hooks/useModal";
import React, { useState } from "react";

export const BooksList: React.FC = (): JSX.Element => {
  const books = useSelector(getBooks);
  const { isOpenModal, toggleModal } = useModal();
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  const handleEditClick = (id: string) => {
    setSelectedBookId(id);
    toggleModal();
  };

  return (
    <div className="container">
      <SortBy />
      <table>
        <caption>Books List</caption>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book: Book) => (
            <tr key={book.id} onClick={() => handleEditClick(book.id)}>
              <BookItem
                id={book.id}
                title={book.title}
                price={book.price}
                category={book.category}
                description={book.description}
              />
            </tr>
          ))}
        </tbody>
      </table>
      {isOpenModal && (
        <Modal title="Edit a book" toggleModal={toggleModal}>
          <EditBookForm toggleModal={toggleModal} bookId={selectedBookId} />
        </Modal>
      )}
    </div>
  );
};
