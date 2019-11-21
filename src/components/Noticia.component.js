import React from 'react';
const Noticia = ({noticia}) => {

    //extraer los datos de la api
    const {urlToImage, url, title, author, description, source} = noticia;
    //condicionalmente cargar una img
    const image = (urlToImage ) ? 
    <div>
    <img className="card-img-top" src={urlToImage} alt={title} />
    <span className="card-title">{source.name}</span>
    </div>


    
    : null;



    return ( <div className="col-md-6 col-lg-6 col">
   <div className="card my-3">
   <div className="card-img-top">{image}</div>
   <div className="card-header">{author}</div>
 
       <div className="card-body" >
           <h5 className="card-title" >{title}</h5>
           <p className="card-text">{description}</p>
           <a target="_blank" rel="noopener noreferrer" href={url} className="btn btn-block btn-warning">Ver fuente</a>
       </div>
   </div>
            </div> 
  );
}
 
export default Noticia;