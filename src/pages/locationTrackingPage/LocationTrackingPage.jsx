import { CardDetailLocation } from "../../components/CardDetailLocation/CardDetailLocation";
import { ItemLocation } from "../../components/ItemLocation/ItemLocation";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { logicLocationTrakingPage } from "./logicLocationTrakingPage";
import "./styleLocationTracking.css";
export const LocationTrackingPage = () => {
  const { assignedLocations, deleteAssigned } = logicLocationTrakingPage();
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
            {/* {assignedLocations.map((location) => (
              <ItemLocation location={location} key={location.id} />
            ))} */}
            {assignedLocations.length === 0 ? (
              <p>Area Vacia</p>
            ) : (
              assignedLocations.map((location) => (
                <ItemLocation location={location} key={location.id} />
              ))
            )}
          </ul>
        </section>
      </section>
      <section className="container-tracking-location__section-details-location">
        <article className="container-tracking-location__container-details-location">
          {/* {assignedLocations.map((location) => (
            <CardDetailLocation
              key={location.id}
              location={location}
              deleteAssigned={deleteAssigned}
            />
          ))} */}
          {assignedLocations.length === 0 ? (
            <p>Area Vacia</p>
          ) : (
            assignedLocations.map((location) => (
              <CardDetailLocation
                key={location.id}
                location={location}
                deleteAssigned={deleteAssigned}
              />
            ))
          )}
        </article>
      </section>
    </section>
  );
};
