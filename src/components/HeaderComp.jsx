import "../css/headerCompStyles.css";

import { NavLink } from "react-router-dom";

const HeaderComp = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              className="LogoLosRosales"
              src="/Logo_LosRosales.png"
              alt="LogoEmpresa"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex w-100 justify-content-around">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/menu"
                >
                  Menú
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/sobre-nosotros"
                >
                  Sobre Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/reservaciones"
                >
                  Reservaciones
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/realizar-pedido"
                >
                  Pedido en línea
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Más acciones
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      type="button"
                      className="dropdown-item btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#sugerenciasModal"
                    >
                      Sugerencias
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#loginModal"
                    >
                      Iniciar Sesión
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComp;
