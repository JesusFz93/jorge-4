import "../css/menuPageStyles.css";

const MenuPage = () => {
  return (
    <>
      <div className="menu-container py-5">
        <div className="container">
          <h1 className="text-center mb-5" style={{ color: "var(--color3)" }}>
            Nuestro Menú
          </h1>

          <hr />

          <h3 className="text-start mb-5" style={{ color: "var(--color3)" }}>
            Entradas
          </h3>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://cloudinary-cdn.whisk.com/image/upload/g_auto,c_fill,q_60,f_auto,h_630,w_1200/v1619901691/recipe/a75dd166e2b9282f2b52d3babd055e75.jpg"
                  alt="Carpaccio de Res"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  Carpaccio de Res
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  Delicadas láminas de res marinadas en aceite de oliva extra
                  virgen, adornadas con alcaparras y lascas de queso parmesano,
                  una entrada que combina sabor y elegancia.
                </p>
                <p className="text-muted text-start">Precio: $180 MXN</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://cdn.kiwilimon.com/brightcove/6506/6506.jpg"
                  alt="Ensalada César"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  Ensalada César
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  La clásica ensalada César con crujientes crutones, queso
                  parmesano rallado y nuestra especial salsa César, perfecta
                  para comenzar tu experiencia culinaria.
                </p>
                <p className="text-muted text-start">Precio: $150 MXN</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://cdn7.kiwilimon.com/recetaimagen/21771/11560.jpg"
                  alt="Provoleta"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  Provoleta
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  Queso provolone fundido a la parrilla con un toque de orégano
                  y aceite de oliva, servido con pan tostado para una entrada
                  irresistible.
                </p>
                <p className="text-muted text-start">Precio: $160 MXN</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://cdn7.kiwilimon.com/recetaimagen/69/640x640/11549.jpg.webp"
                  alt="Empanadas de Carne"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  Empanadas de Carne
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  Tradicionales empanadas argentinas rellenas de una jugosa
                  mezcla de carne cortada a cuchillo, huevo, aceitunas y
                  especias, horneadas a la perfección.
                </p>
                <p className="text-muted text-start">Precio: $130 MXN c/u</p>
              </div>
            </div>
          </div>

          <hr />

          <h3 className="text-start mb-5" style={{ color: "var(--color3)" }}>
            Platos Principales
          </h3>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://cdn.kiwilimon.com/brightcove/6364/6364.jpg"
                  alt="Milanesa Napolitana"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  Milanesa Napolitana
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  Clásica milanesa de res cubierta con salsa de tomate, jamón y
                  queso mozzarella, gratinada al horno y acompañada de
                  crujientes papas fritas.
                </p>
                <p className="text-muted text-start">Precio: $220 MXN</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://i.blogs.es/b64bf1/risotto-de-setas/840_560.jpg"
                  alt="Risotto de Setas"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  Risotto de Setas
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  Delicado y cremoso risotto cocinado lentamente con una
                  selección de setas silvestres, queso parmesano y un toque
                  sutil de vino blanco.
                </p>
                <p className="text-muted text-start">Precio: $200 MXN</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://cdn7.kiwilimon.com/brightcove/9581/640x640/9581.jpg.webp"
                  alt="Pasta al Pesto con Camarones"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  Pasta al Pesto con Camarones
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  Pasta al dente bañada en una exquisita salsa pesto casera,
                  acompañada de camarones salteados y decorada con hojas frescas
                  de albahaca.
                </p>
                <p className="text-muted text-start">Precio: $240 MXN</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://cdn.kiwilimon.com/brightcove/7256/7256.jpg"
                  alt="Pollo al Limón"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  Pollo al Limón
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  Jugosa pechuga de pollo marinada en una refrescante salsa de
                  limón, asada a la perfección y servida con una guarnición de
                  vegetales al vapor.
                </p>
                <p className="text-muted text-start">Precio: $190 MXN</p>
              </div>
            </div>
          </div>

          <hr />

          <h3 className="text-start mb-5" style={{ color: "var(--color3)" }}>
            Cortes
          </h3>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://thebigmansworld.com/wp-content/uploads/2023/05/ribeye-steak-recipe-500x500.jpg"
                  alt="Ribeye"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  Ribeye
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  Exquisito corte de 350 gramos con un marmoleo perfecto, asado
                  a la parrilla hasta alcanzar el punto de cocción deseado,
                  garantizando una jugosidad y sabor incomparables.
                </p>
                <p className="text-muted text-start">Precio: $350 MXN</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/1/2/0/valentines_steak.jpg.rend.hgtvcom.1280.720.suffix/1557859049553.jpeg"
                  alt="T-Bone"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  T-Bone
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  La combinación perfecta de lomo y filete en un solo corte con
                  hueso, asado a la perfección para ofrecer una experiencia
                  carnívora única y satisfactoria.
                </p>
                <p className="text-muted text-start">Precio: $400 MXN</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://www.196flavors.com/wp-content/uploads/2023/01/Picanha-FP.jpg"
                  alt="Picanha"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  Picanha
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  Tradicional corte brasileño, conocido por su capa de grasa que
                  imparte un sabor y una jugosidad excepcionales, sazonado y
                  asado lentamente para resaltar sus ricos sabores.
                </p>
                <p className="text-muted text-start">Precio: $320 MXN</p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://www.comedera.com/wp-content/uploads/2022/04/New-York-steak-perfecto-shutterstock_456436228.jpg"
                  alt="New York Strip"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  New York Strip
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  Corte magro y tierno de 300 gramos, famoso por su sabor
                  intenso y textura suave. Asado a la parrilla para lograr un
                  exterior caramelizado y un interior jugoso.
                </p>
                <p className="text-muted text-start">Precio: $330 MXN</p>
              </div>
            </div>
          </div>

          <hr />

          <h3 className="text-start mb-5" style={{ color: "var(--color3)" }}>
            Tacos
          </h3>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://cdn.kiwilimon.com/brightcove/7350/7350.jpg"
                  alt="Tacos de Arrachera"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  Tacos de Arrachera
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  Suntuosos tacos de arrachera marinada y asada a la perfección,
                  acompañados de cebolla, cilantro fresco y una salsa que
                  despierta los sentidos, todo envuelto en tortillas de maíz
                  hechas a mano.
                </p>
                <p className="text-muted text-start">
                  Precio: $150 MXN por orden
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://www.cocinavital.mx/wp-content/uploads/2021/11/tacos-al-pastor-receta-634x420.jpg"
                  alt="Tacos al Pastor"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  Tacos al Pastor
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  Irresistibles tacos de carne de cerdo adobada, cocinada
                  lentamente en trompo, servidos en tortillas de maíz suaves con
                  trozos de piña, cebolla y cilantro para un toque dulce y
                  fresco.
                </p>
                <p className="text-muted text-start">
                  Precio: $130 MXN por orden
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://mojo.generalmills.com/api/public/content/emm57XARWE2tUveq8Vg8EA_gmi_hi_res_jpeg.jpeg?v=0dcb2463&t=16e3ce250f244648bef28c5949fb99ff"
                  alt="Tacos de Pescado Estilo Baja"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  Tacos de Pescado Estilo Baja
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  Crujientes filetes de pescado empanizados servidos en
                  tortillas de maíz con repollo fresco, crema ácida y una salsa
                  picante que realza todos los sabores, al más puro estilo Baja.
                </p>
                <p className="text-muted text-start">
                  Precio: $160 MXN por orden
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div
                className="menu-item p-4 text-center"
                style={{ backgroundColor: "var(--color5)" }}
              >
                <img
                  src="https://t1.uc.ltmcdn.com/es/posts/2/8/1/como_hacer_tacos_de_camaron_enchilado_51182_300_150.jpg"
                  alt="Tacos de Camarón al Ajillo"
                />
                <h4 className="mt-1" style={{ color: "var(--color2)" }}>
                  Tacos de Camarón al Ajillo
                </h4>
                <p className="text-start" style={{ color: "var(--color3)" }}>
                  Exquisitos camarones salteados en una mezcla de aceite de
                  oliva y ajo, con un toque de guindilla para darles un poco de
                  picante, servidos en tortillas de maíz con guacamole casero.
                </p>
                <p className="text-muted text-start">
                  Precio: $180 MXN por orden
                </p>
              </div>
            </div>
          </div>

          <hr />

          <h3 className="text-start mb-5" style={{ color: "var(--color3)" }}>
            Bebidas
          </h3>

          <div className="row">
            <div className="col-12 col-md-6">
              <h5
                className="text-center mb-4"
                style={{ color: "var(--color2)" }}
              >
                Bebidas Alcohólicas
              </h5>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between mb-2">
                  <span style={{ color: "var(--color3)" }}>
                    Margarita Clásica
                  </span>
                  <span className="text-muted">$120 MXN</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span style={{ color: "var(--color3)" }}>Mojito</span>
                  <span className="text-muted">$110 MXN</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span style={{ color: "var(--color3)" }}>Sangría</span>
                  <span className="text-muted">$90 MXN</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span style={{ color: "var(--color3)" }}>
                    Cerveza Artesanal
                  </span>
                  <span className="text-muted">$70 MXN</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span style={{ color: "var(--color3)" }}>Vino</span>
                  <span className="text-muted">$100 MXN</span>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <h5
                className="text-center mb-4"
                style={{ color: "var(--color2)" }}
              >
                Bebidas No Alcohólicas
              </h5>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between mb-2">
                  <span style={{ color: "var(--color3)" }}>
                    Agua de Horchata
                  </span>
                  <span className="text-muted">$50 MXN</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span style={{ color: "var(--color3)" }}>
                    Limonada Fresca
                  </span>
                  <span className="text-muted">$45 MXN</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span style={{ color: "var(--color3)" }}>Té Helado</span>
                  <span className="text-muted">$40 MXN</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span style={{ color: "var(--color3)" }}>
                    Refrescos y Aguas Gaseosas
                  </span>
                  <span className="text-muted">$35 MXN</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span style={{ color: "var(--color3)" }}>
                    Smoothies de Frutas
                  </span>
                  <span className="text-muted">$60 MXN</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
