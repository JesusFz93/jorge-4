import { useState, useEffect } from "react"
import { crearSugerencia } from "../backend/dbOperations"


const SugerenciasModal = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [tipoSugerencia, setTipoSugerencia] = useState('');
    const [sugerencia, setSugerencia] = useState('');

    const creaSugerencia = async (e) => {
        e.preventDefault();

        const nuevaSugerencia = {
            nombre,
            email,
            tipo: tipoSugerencia,
            sugerencia,
        };

        try {
            await crearSugerencia(nuevaSugerencia); // Envía la sugerencia a Firestore
            alert('Sugerencia enviada con éxito. ¡Gracias por tu aporte!');
            // Limpiar el formulario
            setNombre('');
            setEmail('');
            setTipoSugerencia('');
            setSugerencia('');
        } catch (error) {
            console.error('Error al enviar la sugerencia:', error);
            alert('Hubo un error al enviar tu sugerencia. Por favor, inténtalo de nuevo más tarde.');
        }
    };


    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="sugerenciasModal" tabIndex="-1" aria-labelledby="sugerenciasModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="sugerenciasModalLabel">Sugerencias</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={creaSugerencia} className="mt-3">
                                {/* Campos del formulario */}
                                {/* Nombre */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label" style={{ color: 'var(--color2)' }}>Nombre:</label>
                                    <input type="text" className="form-control" id="name" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </div>
                                {/* Email */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label" style={{ color: 'var(--color2)' }}>Correo Electrónico:</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                {/* Tipo de Sugerencia */}
                                <div className="mb-3">
                                    <label htmlFor="suggestionType" className="form-label" style={{ color: 'var(--color2)' }}>Tipo de Sugerencia:</label>
                                    <select className="form-select" id="suggestionType" value={tipoSugerencia} onChange={(e) => setTipoSugerencia(e.target.value)}>
                                        <option value="">Selecciona una opción</option>
                                        <option value="service">Servicio</option>
                                        <option value="menu">Menú</option>
                                        <option value="ambience">Ambiente</option>
                                        <option value="other">Otro</option>
                                    </select>
                                </div>
                                {/* Sugerencia */}
                                <div className="mb-3">
                                    <label htmlFor="suggestion" className="form-label" style={{ color: 'var(--color2)' }}>Sugerencia:</label>
                                    <textarea className="form-control" id="suggestion" rows="3" value={sugerencia} onChange={(e) => setSugerencia(e.target.value)}></textarea>
                                </div>
                                {/* Botón de envío dentro del modal-footer */}
                            </form>
                        <p>Le agradecemos la sugerencia. Trabajaremos en ella</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                        <button type="submit" className="btn btn-primary" onClick={creaSugerencia} data-bs-dismiss="modal">Enviar</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SugerenciasModal
