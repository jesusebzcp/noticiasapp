import React, { Component } from 'react';
import './assets/css/bootstrap.min.css';
import './App.css';

import Header from './components/header.components';
import NuevaCita from './components/nuevaCita.components'; 

import ListaCitas from './components/listaCita.components';

class App extends Component {
  state = {  
    citas:[]
    
  }
  //cuando la app carga es como funtion ready(){}
  componentDidMount(){
    const citasLs = localStorage.getItem('citas');
    if(citasLs){
      this.setState({
        citas : JSON.parse(citasLs)
      })
    }

  }
  //cuando agrgamos o eliminamos una nueva cita
componentDidUpdate(){
  localStorage.setItem('citas', JSON.stringify(this.state.citas));
}

  crearNuevaCita = datos =>{
 //copiando el state actual 
const citas = [...this.state.citas, datos]

 //agg el nuevo state 
 this.setState({
   citas
 })
    }

    //crear btn para eliminar cita  de state 
    eliminarcita = id =>{
      //tomra una copia de state
    const citasActuales = [...this.state.citas];

      //utiliza el elemento filter para sacar el @id del arreglo 

      const citas = citasActuales.filter(cita => cita.id !== id)

      //actualizar el state
      this.setState({
        citas
      })
    }


  render() { 


    return (
      <div className="contenedor " >
      <Header
        titulo="Pacientes veterinaria"
       />

<div className="container" >

<div className="row ">
<div className="col-md-10 mx-auto" >
  <NuevaCita
    crearNuevaCita={this.crearNuevaCita}
  />
</div>
<div className="mx-auto mt-5 col-md-10 ">
<ListaCitas
  citas={this.state.citas}
  eliminarcita={this.eliminarcita}
/>
</div>


</div>
</div>



      </div>
      );
  }
}
 
export default App;