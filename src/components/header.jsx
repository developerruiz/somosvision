import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

import img from "../sources/img";

const Header = () => {
return (
<>
  <header className="">
    <div className="menu-desktop container">
      <div className="co-lg-12 d-flex justify-content-between">
        
        <div className="col-lg-1  d-flex align-items-center">
          <div className="logo ">
            <Link to="/">
            <img src={img.logo} alt="" width="300px" />
            </Link>
          </div>
        </div>

        <div className="col-lg-11 d-flex m-0 p-0 justify-content-center">
          <div className="list-menu">
            <ul className="list list-unstyled d-flex  m-0 p-0">

              <li className="menu-hover">
                <Link className="text-decoration-none mx-3 color-white fs-5 item-menu" to="/contenido">
                CONTENIDO
                </Link>
              </li>
              <li className="menu-hover">
                <Link className="text-decoration-none mx-3 color-white fs-5 item-menu" to="/staff">
                STAFF
                </Link>
              </li>
              <li className="menu-hover">
                <Link className="text-decoration-none mx-3 color-white fs-5 item-menu" to="/instalaciones">
                INSTALACIONES
                </Link>
              </li>
              <li className="menu-hover">
                <Link className="text-decoration-none mx-3 color-white fs-5 item-menu" to="/colabora">
                COLABORA CON NOSTROS
                </Link>
              </li>
              <li className="menu-hover">
                <Link className="text-decoration-none mx-3 color-white fs-5 item-menu" to="/notas">
                NOTAS
                </Link>
              </li>

            </ul>
          </div>
        </div>

        <div className="col-lg-1 d-flex justify-content-end align-items-center ">
          <i className="fa-solid fa-cart-shopping fs-2 color-black"></i>
        </div>
      </div>
    </div>

    <div className="menu-bar-movil d-flex justify-content-between">
      <div className="logo-menu-movil">
        <a href="index.php" aria-label="Inicio">
          <img src={img.logo} alt="" width="300px" />
        </a>
      </div>
      <div className="burger-menu" id="burger_menu">
        <FontAwesomeIcon icon={faBars} className="fs-4 my-1 scaleIcon" />
      </div>

      <div className="slideMenu overflow-auto" id="slideMenu">
        <nav className="menu-principal mb-5">
          <a href="index.php" className="link-dark text-decoration-none mx-1 ">
            Inicio
          </a>

          <a href="temp.php" className="link-dark text-decoration-none mx-1">
            Comprar
          </a>

          <li>
            <i className="fa-solid fa-angle-right"></i> Hazlo tu mismo
          </li>

          <div className="collapse" id="hazlo-tu-mismo">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 ps-4 small">
              <li>
                <a href="blog.php" className="link-dark rounded">
                  Blog
                </a>
              </li>
              <li>
                <a href="tips.php" className="link-dark rounded">
                  Tips
                </a>
              </li>
              <li>
                <a href="tutoriales.php" className="link-dark rounded">
                  Tutoriales
                </a>
              </li>
            </ul>
          </div>

          <div className="collapse" id="espacios">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 ps-4 small">
              <li>
                <a href="fachadas.php" className="link-dark rounded">
                  Fachada
                </a>
              </li>
              <li>
                <a href="sala.php" className="link-dark rounded">
                  Sala
                </a>
              </li>
              <li>
                <a href="comedor.php" className="link-dark rounded">
                  Comedor
                </a>
              </li>
              <li>
                <a href="cocina.php" className="link-dark rounded">
                  Cocina
                </a>
              </li>
              <li>
                <a href="habitaciones.php" className="link-dark rounded">
                  Habitaciones
                </a>
              </li>
              <li>
                <a href="bano.php" className="link-dark rounded">
                  Baño
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</>
);
};

export default Header;