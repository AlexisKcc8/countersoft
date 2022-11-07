import { CardDetailLocation } from "../../components/CardDetailLocation/CardDetailLocation";
import { ItemLocation } from "../../components/ItemLocation/ItemLocation";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { useFetch } from "../../hooks/useFetch";
import "./styleLocationTracking.css";
export const LocationTrackingPage = () => {
  let url = "  http://localhost:5000/assignedLocations";
  let { data, isPending, error } = useFetch(url);
  console.log(data);
  return (
    <section className="container-tracking-location">
      <section className="container-tracking-location__container-list-and-search-location">
        <h2 className="container-tracking-location__title">
          📒Lista de locaciones
        </h2>
        <section className="container-tracking-location__container-search-form">
          <SearchForm myPlaceholder={"Locación a buscar"} />
        </section>
        <section className="container-tracking-location__container-list">
          <ul className="container-tracking-location__list">
            {data.map((location) => (
              <ItemLocation location={location} key={location.id} />
            ))}
          </ul>
        </section>
      </section>
      <section className="container-tracking-location__section-details-location">
        <article className="container-tracking-location__container-details-location">
          {data.map((location) => (
            <CardDetailLocation location={location} key={location.id} />
          ))}
        </article>
      </section>
    </section>
  );
};
