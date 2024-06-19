import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Icon } from "../index";
import { deleteBook } from "../../redux/actions";

export interface Book {
  title: string;
  id: string;
  description: string;
  price: string;
  category: string;
}
export const BookItem: React.FC<Book> = ({
  id,
  title,
  description,
  price,
  category,
}): JSX.Element => {
  const dispatch = useDispatch();

  const handleDeleteBook = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      dispatch(deleteBook(id));
      toast.success("The book was deleted successfully.");
      event.stopPropagation();
    } catch {
      toast.error("Something went wrong.");
    }
  };

  return (
    <>
      <td>{title}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>
        <button className="btn_delete" type="button" onClick={handleDeleteBook}>
          <Icon id="bin" size={22} />
        </button>
      </td>
    </>
  );
};
