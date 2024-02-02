import "../css/realizarPedidoPageStyles.css"
import { useEffect, useState } from "react"
import { crearPedido } from "../backend/dbOperations"

const RealizarPedidoPage = () => {
    const [platilloSeleccionado, setPlatilloSeleccionado] = useState("");
    const [bebidaSeleccionada, setBebidaSeleccionada] = useState("");
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [horaRecogida, setHoraRecogida] = useState("");

    const manejarEnvioPedido = async (e) => {
        e.preventDefault();

        const pedido = {
            platillo: platilloSeleccionado,
            bebida: bebidaSeleccionada,
            nombre,
            email,
            telefono,
            horaRecogida,
        };

        try {
            await crearPedido(pedido);
            alert("Pedido añadido con éxito");

            // Reiniciar el formulario
            setPlatilloSeleccionado("");
            setBebidaSeleccionada("");
            setNombre("");
            setEmail("");
            setTelefono("");
            setHoraRecogida("");
            
        } catch (error) {
            console.error("Error al añadir el pedido:", error);
            alert("Error al añadir el pedido");
        }
    };



    return (
        <>
            <h1 className="text-center" style={{ color: 'var(--color3)' }}>Pide en línea</h1>
            <hr />
            <div className="row-col">
                <p style={{ color: 'var(--color2)' }}>
                    Pedir en línea en Los Rosales simplifica tu experiencia gastronómica al permitirte elegir cómodamente desde nuestra amplia selección de platos, garantizando precisión y conveniencia en cada pedido. Este servicio no solo reduce los tiempos de espera, asegurando que tu comida esté lista cuando tú lo estés, sino que también te brinda la flexibilidad de programar recogidas según tu horario, haciendo que disfrutar de tus favoritos sea más fácil y accesible que nunca.
                </p>
            </div>
            <div className="row-col mt-4">
                <div className="text-start">
                    <h4 style={{ color: 'var(--color3)' }}>Horarios de Recogida:</h4>
                </div>
                <div className=" contenedorHorarios">
                    <p style={{ color: 'var(--color2)' }}>
                        - Lunes a Viernes: 11:00 AM - 9:00 PM
                    </p>
                    <p style={{ color: 'var(--color2)' }}>
                        - Sábados y Domingos: 12:00 PM - 10:00 PM
                    </p>
                </div>
            </div>
            <hr />
            <div className="col-12 text-start">
                    <h4 style={{ color: 'var(--color3)'}}>Realiza tu Pedido Aquí</h4>
                </div>
            <div className="row-col">
                <form className="mt-3" onSubmit={manejarEnvioPedido}>
                    {/* Detalles del Pedido */}
                    <div className="mb-3 text-center">
                        <label htmlFor="platilloName" className="form-label textoPlatillo" style={{ color: 'var(--color2)' }}>Platillo</label>
                        <select className="form-select" id="platilloName"  value={platilloSeleccionado} onChange={(e) => setPlatilloSeleccionado(e.target.value)} aria-label="Selecciona un platillo">
                            <option value="">Selecciona un platillo</option>
                            
                            <optgroup label="Entradas">
                                <option value="Carpaccio de Res">Carpaccio de Res - $180 MXN</option>
                                <option value="Ensalada César">Ensalada César - $150 MXN</option>
                                <option value="Provoleta">Provoleta - $160 MXN</option>
                                <option value="Empanadas de Carne">Empanadas de Carne - $130 MXN c/u</option>
                            </optgroup>

                            <optgroup label="Platos Principales">
                                <option value="Milanesa Napolitana">Milanesa Napolitana - $220 MXN</option>
                                <option value="Risotto de Setas">Risotto de Setas - $200 MXN</option>
                                <option value="Pasta al Pesto con Camarones">Pasta al Pesto con Camarones - $240 MXN</option>
                                <option value="Pollo al Limón">Pollo al Limón - $190 MXN</option>
                            </optgroup>

                            <optgroup label="Cortes">
                                <option value="Ribeye">Ribeye - $350 MXN</option>
                                <option value="T-Bone">T-Bone - $400 MXN</option>
                                <option value="Picanha">Picanha - $320 MXN</option>
                                <option value="New York Strip">New York Strip - $330 MXN</option>
                            </optgroup>

                            <optgroup label="Tacos">
                                <option value="Tacos de Arrachera">Tacos de Arrachera - $150 MXN por orden</option>
                                <option value="Tacos al Pastor">Tacos al Pastor - $130 MXN por orden</option>
                                <option value="Tacos de Pescado Estilo Baja">Tacos de Pescado Estilo Baja - $160 MXN por orden</option>
                                <option value="Tacos de Camarón al Ajillo">Tacos de Camarón al Ajillo - $180 MXN por orden</option>
                            </optgroup>
                        </select>
                    </div>

                    <div className="mb-3 text-center">
                        <label htmlFor="drinkName" className="form-label textoPlatillo" style={{ color: 'var(--color2)' }}>Bebida</label>
                        <select className="form-select" id="drinkName" value={bebidaSeleccionada} onChange={(e) => setBebidaSeleccionada(e.target.value)} aria-label="Default select example">
                            <option value="">Selecciona una bebida</option>

                            <optgroup label="Bebidas Alcohólicas">
                                <option value="Margarita Clásica">$120 MXN - Margarita Clásica</option>
                                <option value="Mojito">$110 MXN - Mojito</option>
                                <option value="Sangría">$90 MXN - Sangría</option>
                                <option value="Cerveza Artesanal">$70 MXN - Cerveza Artesanal</option>
                                <option value="Vino">$100 MXN - Vino</option>
                            </optgroup>

                            <optgroup label="Bebidas No Alcohólicas">
                                <option value="Agua de Horchata">$50 MXN - Agua de Horchata</option>
                                <option value="Limonada Fresca">$45 MXN - Limonada Fresca</option>
                                <option value="Té Helado">$40 MXN - Té Helado</option>
                                <option value="Refrescos y Aguas Gaseosas">$35 MXN - Refrescos y Aguas Gaseosas</option>
                                <option value="Smoothies de Frutas">$60 MXN - Smoothies de Frutas</option>
                            </optgroup>
                        </select>
                    </div>
                    
                    <div className="mb-3">
                    <input type="text" className="form-control" id="namePedido" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="emailPedido" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Tu correo electrónico" />
                    </div>
                    <div className="mb-3">
                        <input type="tel" className="form-control" id="phonePedido" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Tu teléfono" />
                    </div>
                    <div className="mb-3">
                        <input type="time" className="form-control" id="pickupTime" value={horaRecogida} onChange={(e) => setHoraRecogida(e.target.value)} />
                    </div>
                    
                    {/* Botón de Envío */}
                    <button type="submit" className="btn" style={{ backgroundColor: 'var(--color3)', color: 'var(--color1)' }}>Enviar Pedido</button>
                </form>
            </div>
        </>
    )
}

export default RealizarPedidoPage
