import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { addBookSchema } from "../../schemas/addBookSchema";
import { addBook } from "../../redux/actions";
import s from "./AddBookForm.module.css";

export type Inputs = {
  id?: string;
  title: string;
  price: string;
  description: string;
  category: string;
};
export interface BookProps {
  toggleModal: () => void;
}

export const AddBookForm: React.FC<BookProps> = ({
  toggleModal,
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
      dispatch(addBook(title, price, description, category));
      toast.success("The book was added successfully.");
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
      <button type="submit" className={s.add_book_btn}>
        Add a book
      </button>
    </form>
  );
};
