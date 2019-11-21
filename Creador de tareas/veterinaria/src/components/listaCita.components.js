import React from 'react';
import Cita from './cita.components';
import PropTypes from 'prop-types';
const listaCitas = ({citas, eliminarcita}) => {
//Imprimir un mensaje  a base si ahi o no ahi cita
const mensaje  = Object.keys(citas).length === 0 ? 'No hay citas ' : 'Administra tu cita aqui';


    return (

        <div className="card mb-5  py-5" >
            <div className="card-body" >
            <h2 className="card-title text-center">{mensaje}</h2>
            <div className="lista-citas">
                      {citas.map(cita => (
                          <Cita 
                              key={cita.id}
                              cita={cita}
                              eliminarcita={eliminarcita}
                              
                   
                          />
                      ))}
                  </div>
  
            </div>
        </div>
  
  )
}
 listaCitas.propTypes = {
citas: PropTypes.array.isRequired,
eliminarcita:PropTypes.func.isRequired
 } 
export default listaCitas;