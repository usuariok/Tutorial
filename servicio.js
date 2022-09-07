import React from "react";

function Servicio(){
  return(
    <div className="contenedor-servicio">
      <img 
        className="imagen-servicio"
        src={require("../imagenes/servicio-formacion.png")}
        alt="Servicio de formación"/>
      <div className="contenedor-texto-servicio">
        <p className="nombre-servicio">Formación</p>
        <p className="subtitulo-servicio">Brindamos talleres, conferencias y diplomados</p>
        <p className="texto-servicio">Si deseas capacitarte esta es tu mejor opción</p>
      </div>
    </div>
  );
}

export default Servicio;