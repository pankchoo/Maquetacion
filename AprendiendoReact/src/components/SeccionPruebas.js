import React, {Component} from 'react'
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {

    contador = 0;

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         contador: 0
    //     }
    // }

    state = {
        contador: 0
    }

    HolaMundo(nombre, edad) {
        let presentacion = (
          <div>
            <h1>Hola soy {nombre}</h1>
            <h2>Tengo {edad} años</h2>
          </div>
        )
        return presentacion;
    }

    Sumar = (event) => {
        // return this.state.contador++
        this.setState({
            contador: (this.state.contador+ 1)
        })
    }

    Restar = (event) => {
        // return this.state.contador--
        this.setState({
            contador: (this.state.contador-1)
        })
    }

    render () {
        let nombre = "Francisco";
        let edad = "29";
        return (
            <div className="seccion-pruebas">
                 <section id="content">
                    {this.HolaMundo(nombre,edad)}
                    
                    <section className="componentes">
                        
                        <MiComponente />
                        <Peliculas />
                    </section>

                    <h2 className="subheader">Estado</h2>
                    <p>
                        Contador {this.state.contador}
                    </p>
                    <input type="button" value="Sumar" onClick={this.Sumar}></input>
                    <input type="button" value="Restar" onClick={this.Restar}></input>
                    
                </section>
            </div>
        )
    }
}

export default SeccionPruebas
