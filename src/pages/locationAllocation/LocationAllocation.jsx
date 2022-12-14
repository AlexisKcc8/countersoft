import React from "react";
import { CounterCard } from "../../components/CounterCard/CounterCard";
import { CardLocation } from "../../components/CardLocation/CardLocation";
import { Modal } from "../../components/Modal/Modal";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { logicLocationAllocation } from "./logicLocationAllocation";
import { useModal } from "../../hooks/useModal";
import "./styleLocationAllocation.css";
export const LocationAllocation = () => {
  const { counters, locations, setCounter, counter, addAssignment } =
    logicLocationAllocation();
  const [
    isOpenModalLocations,
    openModalLocation,
    closeModalLocation,
    handlePropagationModal,
  ] = useModal(false);
  return (
    <section className="container-location-allocation">
      <article className="container-location-allocation__section-form-search">
        <SearchForm myPlaceholder={"Nombre del contador"} />
      </article>
      <article className="container-location-allocation__section-counters">
        {counters.map((counter) => (
          <CounterCard
            counter={counter}
            key={counter.id}
            openModal={openModalLocation}
            setCounter={setCounter}
          />
        ))}
      </article>

      <Modal
        isOpen={isOpenModalLocations}
        closeModal={closeModalLocation}
        title={`Locaciones para ${counter}`}
        handlePropagationModal={handlePropagationModal}
      >
        <section className="container-location-allocation__section-search-location">
          <SearchForm myPlaceholder={"Locación a buscar"} />
        </section>
        <section className="container-location-allocation__section-locations-modal">
          {locations.map((location) => (
            <CardLocation
              key={location.id}
              dataLocation={location}
              addAssignment={addAssignment}
            />
          ))}
        </section>
      </Modal>
    </section>
  );
};
