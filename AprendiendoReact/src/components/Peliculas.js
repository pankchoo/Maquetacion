import React, {Component} from 'react'
import MensajeEstatico from './MensajeEstatico'

class Peliculas extends Component {
    render () {
        return (
            <React.Fragment>
                <h1> Soy el componente peliculas </h1>
                <MensajeEstatico />
            </React.Fragment>
            // <div className=>
                // <h1>Soy un componente nuevo</h1>
            //</div>
        )
    }
}

export default Peliculas
