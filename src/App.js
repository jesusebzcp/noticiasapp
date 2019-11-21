import React, {Component, Fragment} from 'react';
import Header from './components/Header.component';
import ListaNoticias from './components/ListaNoticias.component';
import Formulario from './components/formulario.component';






class App extends Component{
  state = {
    //Iniciamos noticas como un arreglo vacio
    noticias : []
  }
 componentDidMount(){
  this.consultarNoticias();

}

//Para que no se vea cargado el metodo de ciclo de vida me creo un propio metodo
consultarNoticias = async (categoria = 'general') =>{
  const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=bc1f7b8f0dd545e4a3ceeed9f0fa6b83`

const respuesta = await fetch(url);
const noticias = await respuesta.json()


this.setState({

  noticias : noticias.articles
})
}

render(){
  return(

   <Fragment>

     <Header
     titulo="NotiApp" />
   
     <div className="container card" >
 <Formulario
 consultarNoticias={this.consultarNoticias}
  />
     <ListaNoticias
     noticias={this.state.noticias} />

     </div>
   </Fragment>
  )
}
}

export default App;
