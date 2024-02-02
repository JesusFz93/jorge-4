import "./HomePageStyles.css";

const HomePage = () => {
  return (
    <>
      <div className="row text-center">
        <div className="col-12 col-lg-6 p-1">
          <img
            className="img-fluid"
            src="../../public/images/ImagenInicial.png"
            alt="ImagenComida"
          />
        </div>
        <div className="col-12 col-lg-6 text-center p-1 contenedorTitulo">
          <h1 className="tituloh1">LOS ROSALES</h1>
          <h3 className="tituloh3">Donde los sabores florecen</h3>
        </div>
      </div>
      <hr />
      <div className="row-col text-center">
        <h2 className="descripcionhTitle col-12">CONOCÉNOS</h2>
      </div>
      <div className="row">
        <h4 className="descripcionh4 col-12 col-lg-6">
          Un restaurante jardín único. Con un ambiente agradable y temáticas que
          van de acuerdo a las fechas
        </h4>
        <h4 className="descripcionh4 col-12 col-lg-6">
          Un lugar que te hace sentir en casa, con amor en cada platillo y
          calidad en cada cucharada
        </h4>
      </div>
      <div className="row-col">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="../../public/images/Imagen1.png"
                className="d-block w-100"
                alt="FotoPlatillos"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../public/images/Imagen2.png"
                className="d-block w-100"
                alt="FotoMesas"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../public/images/Imagen3.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <hr />
      <div className="row text-center">
        <h2 className="descripcionhTitle col-12">NUESTRA UBICACIÓN</h2>
      </div>
      <div className="row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.0409093017497!2d-99.2316005!3d19.66826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21f56715bf38f%3A0xcf26e2dc5052ce60!2sRestaurante%20%22Los%20Rosales%22!5e0!3m2!1ses!2smx!4v1706404791633!5m2!1ses!2smx"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default HomePage;
