import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HeaderComp from "../components/HeaderComp";
import HomePage from "../pages/HomePage.jsx";
import MenuPage from "../pages/MenuPage";
import SobreNosotrosPage from "../pages/SobreNosotrosPage";
import ReservacionesPage from "../pages/ReservacionesPage.jsx";
import RealizarPedidoPage from "../pages/RealizarPedidoPage";
import SugerenciasModal from "../components/SugerenciasModalComponent";
import LoginModalComponent from "../components/LoginModalComponent";
import FooterComponent from "../components/FooterComponent.jsx";

const AppRouter = () => {
  return (
    <Router>
      <header>
        <HeaderComp />
      </header>
      <SugerenciasModal />
      <LoginModalComponent />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
          <Route path="/reservaciones" element={<ReservacionesPage />} />
          <Route path="/realizar-pedido" element={<RealizarPedidoPage />} />
          {/* Rutas no definidas */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <FooterComponent />
    </Router>
  );
};

export default AppRouter;
