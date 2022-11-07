import React from "react";
import "./StyleSearchForm.css";
export const SearchForm = (props) => {
  const { myPlaceholder } = props;
  return (
    <form className="container-form-search">
      <input
        className="container-form-search__input-name-counter"
        type="text"
        name="name-counter"
        placeholder={myPlaceholder}
        aria-label="default input example"
        required
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={form.name}
      />

      <input
        type="submit"
        value="Buscar"
        className="container-form-search__btn-form-search"
      />
    </form>
  );
};
