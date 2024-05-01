import { Field, Form, Formik } from "formik";
import css from "../SearchForm/SearchForm.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchForm({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    const searchRule = values.search.trim().toLowerCase();
    if (!values.search.trim()) {
          toast.error("Please enter a correct search term!");
          return;
        }

        onSubmit(searchRule);
        actions.resetForm();
      }
      return (
        <div className={css.box}>
          <Formik className={css.wrapper} initialValues={{ search: '' }} onSubmit={handleSubmit}>
            <Form className={css.form}>
              <Field className={css.search}
                type="text"
                name="search"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
              />
              <button className={css.btn} type="submit">
                Search
              </button>
              <Toaster />
            </Form>
          </Formik>
        </div>
      );
    };