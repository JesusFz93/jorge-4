import "../css/footerCompStyles.css";

const FooterComponents = () => {
  const mensaje = "Hola, me gustaría obtener más información.";
  return (
    <>
      <footer className="bg-dark p-3 mt-4" data-bs-theme="dark">
        <div className="container">
          <div className="row-col text-center d-flex justify-content-around">
            <a href="tel:+525627944113">
              <box-icon name="phone" color="#fbf3eb" size="md"></box-icon>
            </a>
            <a
              href="https://wa.me/5627944113?text=Hola,%20me%20gustaría%20pedir%20más%20información%20sobre..."
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                type="logo"
                name="whatsapp-square"
                color="#fbf3eb"
                size="md"
              ></box-icon>
            </a>
            <a
              href="https://www.facebook.com/desayunoslosrosales"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                type="logo"
                name="facebook-square"
                color="#fbf3eb"
                size="md"
              ></box-icon>
            </a>
            <a
              href="https://www.instagram.com/restaurante_losrosales?igsh=dHdjb3VmNzlwNnh2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                type="logo"
                name="instagram"
                color="#fbf3eb"
                size="md"
              ></box-icon>
            </a>
            <a
              href="https://maps.app.goo.gl/iiAkP8q57Mt8NqHY6?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon name="map" color="#fbf3eb" size="md"></box-icon>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponents;
