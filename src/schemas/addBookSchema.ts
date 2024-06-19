import * as yup from "yup";

export const addBookSchema = yup.object().shape({
  id: yup.string(),
  title: yup
    .string()
    .required("Title is required.")
    .min(2, "Title should be at least 2 characters."),
  price: yup
    .string()
    .required("Price is required")
    .matches(/^[0-9]+$/, "Price should only contain numbers."),
  description: yup
    .string()
    .required("Description is required")
    .min(2, "Description should be at least 2 characters."),
  category: yup
    .string()
    .required("Category is required.")
    .min(2, "Category should be at least 2 characters."),
});
