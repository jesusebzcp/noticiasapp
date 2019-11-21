import React from 'react';
import PropTypes from 'prop-types';


const Cita = ({cita, eliminarcita}) => (
<div className="media mt-3 ">
<div className="media-body " >
    <h2 className="mt-0 text-center mascota py-2">{cita.mascota}</h2>
    <p className="card-text" > <span>Propietario: </span><span className="resultado">{cita.propietario}</span></p>
    <p className="card-text" > <span>Hora de salida: </span><span className="resultado">{cita.hora}</span></p>
    <p className="card-text" > <span>Fecha de salida: </span><span className="resultado">{cita.fecha}</span></p>
    <p className="card-text" > <span>Sintomas: </span><span className="resultado">{cita.sintomas}</span></p>

<button onClick={() => eliminarcita(cita.id)} className="btn btn-outline-danger" > Borrar cita &times;</button>
</div>

</div>
);
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarcita:PropTypes.func.isRequired
     }

 
export default Cita;