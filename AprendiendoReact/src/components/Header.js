import React, {Component} from 'react'
import logo from '../assets/images/logo.svg'

class Header extends Component {

    render () {
        return (
            <header id="header">
                <div ClassName="center">
                
                    {/* <!-- LOGO -->     */}
                    <div id="logo">
                        <img src={logo} alt="app-logo" ClassName="app-logo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>

                    {/* <!-- MENU --> */}
                    <nav id="menu">
                        <ul>
                            <li>
                                <a href="index.html"> Inicio </a>
                            </li>
                            <li>
                                <a href="blog.html"> Blog </a>
                            </li>
                            <li>
                                <a href="formulario.html"> Formulario </a>
                            </li>
                            <li>
                                <a href="#"> Pagina 1 </a>
                            </li>
                            <li>
                                <a href="#"> Pagina 2  </a>
                            </li>
                        </ul>
                    </nav>

                    {/* <!-- limpiar floats para que los elementos del contenido de la pagina no se suban NO SE MONTAN ELEMENTOS --> */}
                    <div ClassName="clearfix"></div>
                </div>
            </header>
        )
    }
}

export default Header
