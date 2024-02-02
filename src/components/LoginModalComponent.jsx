

const LoginModalComponent = () => {
    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="loginModalLabel">Inicio de Sesión</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="mt-3">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label" style={{ color: 'var(--color2)' }}>Nombre de Usuario</label>
                                <input type="text" className="form-control" id="username" placeholder="Ingresa tu usuario" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label" style={{ color: 'var(--color2)' }}>Contraseña:</label>
                                <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary"  data-bs-dismiss="modal">Iniciar Sesión</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginModalComponent
