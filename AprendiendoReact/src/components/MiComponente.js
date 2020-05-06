import React, {Component} from 'react'

class MiComponente extends Component {
    
    render () {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['masa', 'tomate', 'queso','jamón'],
            calorias: 400
        }
        return (
            <React.Fragment>
                <h1>Receta: {receta.nombre}</h1>
                <h2>Calorias: {receta.calorias}</h2>
                <ul>
                {
                    receta.ingredientes.map((ingrediente,i) => {
                        return (
                            <li key={i}>{ingrediente}</li>
                        )
                    })
                }
                </ul>
                <hr/>
            </React.Fragment>
        )
    }
}

export default MiComponente