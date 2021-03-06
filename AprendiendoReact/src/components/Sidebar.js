import React, {Component} from 'react'

class Sidebar extends Component {
    render () {
        return (
            // sidebar
            <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <a href="" class="btn btn-success">Crear artículo</a>
                </div>
                <div id="search" class="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el artículo que buscas</p>
                    <form action="" method="post">
                        <input type="text" name="search" />
                        <input type="submit" value="Buscar" class="btn" />
                    </form>
                </div>
            </aside>
        )
    }
}

export default Sidebar
