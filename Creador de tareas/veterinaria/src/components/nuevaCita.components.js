import React, {Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';


//creamos un state inicial 
const stateInicial = {
     
/* todo los que el usuario escriba aquiiii */
//Creamos un objeto para las citas
     
cita : {
    mascota: '',
    propietario: '',
    hora: '',
    fecha: '',
    sintomas: ''
},
//iniciamos un error
error: false

    
}

class NuevaCita extends Component {
    state = { ...stateInicial}
//cuando el usuario escribe en los inputs 
     handleChange = e =>{

         //colocar lo que el usuario escribe en el state

         this.setState({
             cita :{
                 //se crea una copia de state
                 ...this.state.cita,
                 [e.target.name]: e.target.value
             }
         });
     };

     //cuando el usuario envia el formulario se valida

        handleSubmit = e =>{
         //prevenimos el comportamiento por default

         e.preventDefault()

         //traer los datos de los usuarios

         const {mascota, fecha, hora, propietario, sintomas } = this.state.cita;

         //validar formualrio

         if (mascota === '' || fecha ==='' || hora === '' || propietario ==='' || sintomas ===''){
          
         this.setState({

             error : true

         });
            //detener la ejecucion con un retorno
         return; 
         }
//vamos a generaqr un objeto con los datos
        const NuevaCita = {...this.state.cita}
        NuevaCita.id = uuid();

         // y si todo sale bien agrgamos la cita al state 
         this.props.crearNuevaCita(NuevaCita)

   


            //colocar el state en el stateInicial
            this.setState({
...stateInicial
            })

     }



    render() { 
            //extraer valor de state 
    const {error} =  this.state;
        return ( 

            <div className="card my-5 py-5 " >

                <div className="card-body" >
                    <h2 className="card-title text-center mb-5"> 
                    Por favor crea una nueva cita</h2>
                    {error ? <div className="alert alert-danger" role="alert">Por favor llena todos los campos...</div> :null }

                        <form 
                    onSubmit={this.handleSubmit}
                         >
                    <div className="from-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label" >Nombre mascota</label>

                        <div className="col-sm-8 col-lg-10">
                            <input className="form-control"
                                type="text"
                                placeholder="Nombre mascota"
                                name="mascota"
                                onChange={this.handleChange}
                                value={this.state.cita.mascota}

                            />
                        </div>
                     </div>{/* from-group */}

                     <div className="from-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label" >Nombre dueño</label>

                        <div className="col-sm-8 col-lg-10">
                            <input className="form-control"
                                type="text"
                                placeholder="Nombre dueño"
                                name="propietario"
                                onChange={this.handleChange}
                                value={this.state.cita.propietario}

                            />
                        </div>
                     </div>
                     {/* from-group */}

                     <div className="from-group row mt-4">
                        <label className="col-sm-4 col-lg-2 col-form-label" >Fecha </label>

                        <div className="col-sm-3 col-lg-4">
                            <input className="form-control"
                                type="date"
         
                                name="fecha"
                                onChange={this.handleChange}
                                value={this.state.cita.fecha}

                            />
                        </div>
                        {/* hora */}
                        <label className="col-sm-4 col-lg-2 col-form-label" >Hora </label>

                                    <div className="col-sm-3 col-lg-4">
                                        <input className="form-control"
                                            type="time"

                                            name="hora"
                                            onChange={this.handleChange}
                                         value={this.state.cita.hora}

                                        />
                                    </div>
                     </div>{/* from-group */}

                     <div className="from-group row mt-5">
                        <label className="col-sm-4 col-lg-2 col-form-label" >Sintomas del paciente</label>

                        <div className="col-sm-8 col-lg-10">
                       <textarea
                        name="sintomas"  className="form-control"
                        placeholder="Describe los sintomas correctamente"
                        onChange={this.handleChange}
                                value={this.state.cita.sintomas}
                        >

                       </textarea>
                        </div>
                     </div>
                     {/* from-group */}
                    

               
                     <input type="submit" className="py-3 mt-3 btn-block btn btn-outline-info " value="Agregar nueva cita"/>
                        </form>
              


                </div>
            </div>

         );
    }
}
NuevaCita.propTypes = {
crearNuevaCita : PropTypes.func.isRequired
} 
 
export default NuevaCita;