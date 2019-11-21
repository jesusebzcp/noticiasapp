import React, { Component } from 'react';
class Formulario extends Component {
    state = { 
        categoria : "general"
     }
     cambiarCategoria = e =>{
         this.setState({
             categoria :  e.target.value
         }, () =>{
             //mediqante un callback lo llamos al instante para que se ejecute el codigo al mismo tiempo
         //pasarlo al component principal
         this.props.consultarNoticias(this.state.categoria)
         })


     }



    render() { 
        return ( 
            <div className="row" >
                <div className="col" >
                    <form className="my-2">
                        <h2 className="text-left my-2">Que Buscas?</h2>
                        <div className="text-center col col-sm-8">
                        <select
                        onChange={this.cambiarCategoria}
                         className="custom-select" >
                            <option selected value="general">--General--</option>
                            <option value="business">Negocios</option>
                            <option value="entertainment">Entretenimiento</option>
                            <option value="health">Salud</option>
                            <option value="sports">Deportes</option>
                            <option value="technology">Tecnologia</option>

                        </select>
                        
                         </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Formulario;