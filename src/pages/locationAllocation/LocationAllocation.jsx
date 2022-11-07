import React from "react";
import { ButtonsPagination } from "../../components/ButtonsPagination/ButtonsPagination";
import { CounterCard } from "../../components/CounterCard/CounterCard";
import { Modal } from "../../components/Modal/Modal";

import { SearchForm } from "../../components/SearchForm/SearchForm";
import { useFetch } from "../../hooks/useFetch";
import "./styleLocationAllocation.css";
export const LocationAllocation = () => {
  let url = "  http://localhost:5000/counters";
  let { data, isPending, error } = useFetch(url);

  return (
    <section className="container-location-allocation">
      <article className="container-location-allocation__section-form-search">
        <SearchForm myPlaceholder={"Nombre del contador"} />
      </article>
      <article className="container-location-allocation__section-counters">
        {data.map((counter) => (
          <CounterCard counter={counter} key={counter.id} />
        ))}
      </article>
      <article className="container-location-allocation__section-pagination">
        <ButtonsPagination />
      </article>
    </section>
  );
};
