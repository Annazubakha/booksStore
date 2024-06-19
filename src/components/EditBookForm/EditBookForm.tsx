import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { addBookSchema } from "../../schemas/addBookSchema";
import { BookProps, Inputs } from "../AddBookForm/AddBookForm";
import s from "../AddBookForm/AddBookForm.module.css";
import { editBook, deleteBook } from "../../redux/actions";
import { Icon } from "../Icon/Icon";
export interface EditBookProps extends BookProps {
  bookId: string | null;
}
export const EditBookForm: React.FC<EditBookProps> = ({
  toggleModal,
  bookId,
}): JSX.Element => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(addBookSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async ({
    title,
    price,
    description,
    category,
  }) => {
    try {
      if (!bookId) {
        return;
      }
      await dispatch(editBook(bookId, title, price, description, category));
      toast.success("The book was edited successfully.");
    } catch {
      toast.error("Something went wrong.");
    } finally {
      toggleModal();
    }
  };
  const handleDeleteBook = async () => {
    try {
      if (!bookId) {
        return;
      }
      await dispatch(deleteBook(bookId));
      toast.success("The book was deleted successfully.");
    } catch {
      toast.error("Something went wrong.");
    } finally {
      toggleModal();
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div className={s.input_wrapper}>
        <input placeholder="Title" {...register("title")} />
        <p className={s.form_error}>{errors.title?.message}</p>
      </div>
      <div className={s.input_wrapper}>
        <input placeholder="Price" {...register("price")} />
        <p className={s.form_error}>{errors.price?.message}</p>
      </div>
      <div className={s.input_wrapper}>
        <input placeholder="Description" {...register("description")} />
        <p className={s.form_error}>{errors.description?.message}</p>
      </div>
      <div className={s.input_wrapper}>
        <input placeholder="Category" {...register("category")} />
        <p className={s.form_error}>{errors.category?.message}</p>
      </div>
      <div className={s.btn_cancel}>
        <button
          className={s.add_book_btn}
          type="submit"
          onClick={handleDeleteBook}
        >
          <Icon id="bin" className={s.icon} size={22} />
        </button>
        <button type="submit" className={s.add_book_btn}>
          Edit
        </button>
        <button type="button" className={s.add_book_btn} onClick={toggleModal}>
          Cancel
        </button>
      </div>
    </form>
  );
};
