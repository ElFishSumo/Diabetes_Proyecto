import React from 'react'
import './Home.css';

const Perfil = () => {
    return (
        <div>
            <div className="contenedor sombra">
                <div className="row">
                    <div className="col">
                        <h2 class="text-start">Nombre de Usuario.</h2>
                    </div>
                </div>
                <div class="input-group">
                    <span class="input-group-text">Agenda</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <div className="row">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start col-2">
                        <input type="date"></input>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end col-10">
                        <button type="button" className="boton">Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Perfil