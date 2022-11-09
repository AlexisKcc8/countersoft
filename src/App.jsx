import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LocationAllocation } from "./pages/locationAllocation/LocationAllocation";
import { LocationTrackingPage } from "./pages/locationTrackingPage/LocationTrackingPage";
import { ReportsPage } from "./pages/ReportsPage/ReportsPage";
import { CounterEfficiencyPage } from "./pages/CounterEfficiencyPage/CounterEfficiencyPage";
import { GroupEfficiencyPage } from "./pages/GroupEfficiencyPage/GroupEfficiencyPage";
import { DataLoadingPage } from "./pages/DataLoadingPage/DataLoadingPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { NavbarMenu } from "./components/NavbarMenu/NavbarMenu";
import { Modal } from "./components/Modal/Modal";

function App() {
  return (
    <section className="App">
      <article className="container-menu">
        <NavbarMenu />
      </article>
      <section className="container-pages ">
        <main>
          <Routes>
            <Route path="/" element={<LocationAllocation />} />
            <Route
              path="/asignacion-locaciones"
              element={<LocationAllocation />}
            />
            <Route
              path="/seguimiento-de-locaciones"
              element={<LocationTrackingPage />}
            />
            <Route path="/reportes" element={<ReportsPage />} />
            <Route
              path="/eficiencia-contador"
              element={<CounterEfficiencyPage />}
            />
            <Route
              path="/eficiencia-grupal"
              element={<GroupEfficiencyPage />}
            />
            <Route path="/cargar-datos" element={<DataLoadingPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </section>
      {/* <Modal /> */}
    </section>
  );
}

export default App;
