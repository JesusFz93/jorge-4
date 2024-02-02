import "../css/reservacionesPageStyles.css"
import { useState } from "react";
import { crearReservacion } from "../backend/dbOperations";

const ReservacionesPage = () => {

    // Estados para cada campo del formulario
    const [reservationDate, setReservationDate] = useState('');
    const [reservationTime, setReservationTime] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [specialRequests, setSpecialRequests] = useState('');
    const [nombre, setNombre] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [telefono, setTelefono] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    // Manejador de eventos para el envío del formulario
    const enviarFormulario = async (event) => {
        event.preventDefault();
    
        const reservacion = {
            nombre,
            correoElectronico,
            telefono,
            fecha: reservationDate,
            hora: reservationTime,
            numeroDeInvitados: numberOfGuests,
            peticionesEspeciales: specialRequests
        };
    
        const resultado = await crearReservacion(reservacion);
    
        if (resultado.success) {
            // Mostrar mensaje de éxito
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 5000);
            
            
            // Resetear todos los campos del formulario
            setNombre(''); // Asegúrate de resetear también el nombre
            setCorreoElectronico(''); // Resetear el correo electrónico
            setTelefono(''); // Resetear el número de teléfono
            setReservationDate('');
            setReservationTime('');
            setNumberOfGuests(1); // Volver al valor inicial predeterminado
            setSpecialRequests('');
        } else {
            // Mostrar mensaje de error basado en `resultado.message`
            alert(resultado.message); // O usa tu propio mecanismo para mostrar mensajes de error en la UI
        }
    };


    return (
        <>
            <h1 className="text-center" style={{ color: 'var(--color3)' }}>Reservaciones</h1>
            <hr />
            <div className="row-col">
                <p style={{ color: 'var(--color2)' }}>
                    Hacer una reservación en Los Rosales te garantiza una mesa en nuestro acogedor comedor, 
                    permitiéndote disfrutar de una experiencia gastronómica sin igual sin la espera. Benefíciate de nuestro 
                    servicio personalizado y asegúrate de que tus ocasiones especiales sean memorables. Recomendamos reservar 
                    con anticipación, especialmente para cenas de fin de semana, festividades y eventos especiales.
                </p>
            </div>
            <div className="row-col">
                <div className="text-start">
                    <h4 style={{ color: 'var(--color3)'}}>Horarios de Reservación:</h4>
                </div>
                <div className="contenedorHorarios">
                    <p style={{ color: 'var(--color2)' }}>
                        - Lunes a Viernes: 12:00 PM - 10:00 PM
                    </p>
                    <p style={{ color: 'var(--color2)' }}>
                        - Sábados y Domingos: 10:00 AM - 11:00 PM
                    </p>
                </div>
                <div>
                    <p className="text-center" style={{ color: 'var(--color2)' }}>Para grupos grandes o eventos privados, por favor contáctanos directamente.</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 text-start">
                    <h4 style={{ color: 'var(--color3)'}}>Realiza tu Reservación Aquí</h4>
                </div>
                <div className="col">
                    <form className="mt-3" onSubmit={enviarFormulario}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label" style={{ color: 'var(--color2)' }}>Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombre"
                                value={nombre}
                                onChange={e => setNombre(e.target.value)}
                                required
                                pattern="[A-Za-z\s]{3,}" // Solo letras y espacios, mínimo 3 caracteres
                                title="El nombre debe tener al menos 3 letras. No se permiten números ni caracteres especiales."
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="correoElectronico" className="form-label" style={{ color: 'var(--color2)' }}>Correo Electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                id="correoElectronico"
                                value={correoElectronico}
                                onChange={e => setCorreoElectronico(e.target.value)}
                                required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                title="Por favor, introduce una dirección de correo válida."
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label" style={{ color: 'var(--color2)' }}>Teléfono</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="telefono"
                                value={telefono}
                                onChange={e => setTelefono(e.target.value)}
                                required
                                pattern="[0-9]{10}"
                                title="El número de teléfono debe tener 10 dígitos numéricos."
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="reservationDate" className="form-label" style={{ color: 'var(--color2)' }}>Fecha</label>
                            <input
                                type="date"
                                className="form-control"
                                id="reservationDate"
                                value={reservationDate}
                                onChange={e => setReservationDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="reservationTime" className="form-label" style={{ color: 'var(--color2)' }}>Hora</label>
                            <input
                                type="time"
                                className="form-control"
                                id="reservationTime"
                                value={reservationTime}
                                onChange={e => setReservationTime(e.target.value)}
                                min="10:00"
                                max="22:00"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="numberOfGuests" className="form-label" style={{ color: 'var(--color2)' }}>Número de Personas</label>
                            <input
                                type="number"
                                className="form-control"
                                id="numberOfGuests"
                                value={numberOfGuests}
                                onChange={e => setNumberOfGuests(e.target.value)}
                                min="1"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="specialRequests" className="form-label" style={{ color: 'var(--color2)' }}>Peticiones Especiales</label>
                            <textarea
                                className="form-control"
                                id="specialRequests"
                                value={specialRequests}
                                onChange={e => setSpecialRequests(e.target.value)}
                                rows="3"
                            ></textarea>
                        </div>
                        {/* Mensaje de éxito */}
                        {showSuccessMessage && (
                            <div className="alert alert-success" role="alert">
                                Reservación enviada con éxito.
                            </div>
                        )}
                        <div className="d-grid">
                            <button type="submit" className="btn botonReservacion">Enviar Reservación</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ReservacionesPage
