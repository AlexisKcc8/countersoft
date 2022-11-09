import "./styleCardDetailLocation.css";
export const CardDetailLocation = (props) => {
  const { location } = props;
  return (
    <section id={location.id} className="container-detail-location">
      <article className="container-detail-location__header">
        <h2 className="container-detail-location__header-warehouse">
          Almacén: {location.warehouse}
        </h2>
      </article>
      <article className="container-detail-location__body">
        <h2 className="container-detail-location__body-assigned-counter">
          Contador asignado: {location.assignedCounter}
        </h2>
        <div className="container-detail-location__body-container-title-location">
          <h2 className="container-detail-location__body-title-location">
            {location.location}
          </h2>
        </div>
        <div className="container-detail-location__body-container-status-location">
          <h2>Estado:</h2>
          <h2 className="container-detail-location__body-status-location">
            {location.StatusCount}
          </h2>
        </div>
      </article>
      <article className="container-detail-location__footer">
        <h3 className="container-detail-location__number-rolls">
          Número de rollos: {location.NumberOfRolls}
        </h3>
        <h3 className="container-detail-location__number-styles">
          Número de estilos: {location.NumberStylesLocation}
        </h3>
      </article>
    </section>
  );
};
