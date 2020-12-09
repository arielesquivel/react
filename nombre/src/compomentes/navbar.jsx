import React, { Component } from 'react'
import Perfil from '../img/boceto2.jpg';
export default class navbar extends Component {
    render() {
        return (
            <nav>
                <ul className="nav justify-content-end">
                        <div className="contenedor_perfil">
                            <img src={Perfil} alt="imagen secundaria" className="perfil"/>
                            <ul className="perfil_nav">
                            <li><h6>Ariel Alejandro</h6></li>
                            <li>Esquivel</li>
                            <li>Programador</li>
                            </ul>
                        </div>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Sobre Mi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Trabajos">Trabajos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://api.whatsapp.com/send?phone=541154989317&text=hola%20soy%20Ariel%20Esquivel%20%2CDesarrollador%20web%20con%20conocimientos%20en%20html5%2Ccss%2Cjs%2Creact%2Cen%20que%20puedo%20ayudarte%20">Contacto</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
