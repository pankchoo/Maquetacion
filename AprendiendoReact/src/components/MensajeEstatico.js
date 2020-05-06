import React, {Component} from 'react'

const MensajeEstatico = () => {
    
    function muestraParrafo (parrafo) {
        
        return(
            <p>{parrafo}</p>
        );
    }

    let parrafo = "Hola soy un párrafo llamado desde una función en un mensaje estático";

    return (
        
        <div className="mensaje-estatico">
            <h3>Hola soy un mensaje estático</h3>
            {muestraParrafo(parrafo)}
        </div>
    )
}

export default MensajeEstatico
