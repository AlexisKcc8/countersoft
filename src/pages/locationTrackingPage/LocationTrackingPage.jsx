import { CardDetailLocation } from "../../components/CardDetailLocation/CardDetailLocation";
import { ItemLocation } from "../../components/ItemLocation/ItemLocation";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { logicLocationTrakingPage } from "./logicLocationTrakingPage";
import { Modal } from "../../components/Modal/Modal";
import { useModal } from "../../hooks/useModal";
import "./styleLocationTracking.css";
import { ItemCounter } from "../../components/ItemCounter/ItemCounter";
export const LocationTrackingPage = () => {
  const {
    assignedLocations,
    deleteAssigned,
    updateCounter,
    getSpecificLocation,
    updateStatusCounting,
    counters,
  } = logicLocationTrakingPage();
  const [
    isOpenModalLocations,
    openModalLocation,
    closeModalLocation,
    handlePropagationModal,
  ] = useModal(false);
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
          {assignedLocations.length === 0 ? (
            <p>Sin Datos por mostrar</p>
          ) : (
            assignedLocations.map((location) => (
              <CardDetailLocation
                key={location.id}
                location={location}
                updateCounter={updateCounter}
                updateStatusCounting={updateStatusCounting}
                getSpecificLocation={getSpecificLocation}
                openModal={openModalLocation}
                deleteAssigned={deleteAssigned}
              />
            ))
          )}
        </article>
      </section>
      <Modal
        isOpen={isOpenModalLocations}
        closeModal={closeModalLocation}
        title={`Selecciona al nuevo contador!!!`}
        handlePropagationModal={handlePropagationModal}
      >
        <section className="container-tracking-location__section-modal-counters">
          {counters.length === 0 ? (
            <p>Sin Datos por mostrar</p>
          ) : (
            counters.map((counter) => (
              <ItemCounter
                key={counter.id}
                dataCounter={counter}
                updateCounter={updateCounter}
                closeModal={closeModalLocation}
              ></ItemCounter>
            ))
          )}
        </section>
      </Modal>
    </section>
  );
};
