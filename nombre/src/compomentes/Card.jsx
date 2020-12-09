import React, { Component } from 'react'
import Img_1 from '../img/boceto2.jpg'
export default class Card extends Component {
    render() {
return(
    <div className="Contenedor_principal">
        <div className="div8">
            <a id="Trabajos"><h2>Mis trabajos</h2></a>
            <div className="Card_principal">
                <div className="I_card">
                    <img src={Img_1} alt="foto de prueba" className="fot"/></div>
                <div className="P_card">Ari paluzza</div>
                <div className="Btn_card"><button className="btn"><a href="https://github.com/arielesquivel/porfolio/tree/main/Aripaluzza">Mas Info</a></button></div>
            </div>
            <div className="Card_principal">
                <div className="I_card">
                    <img src={Img_1} alt="foto de prueba" className="fot"/></div>
                <div className="P_card">Logo de telefe</div>
                <div className="Btn_card"><button className="btn"><a href="https://github.com/arielesquivel/porfolio/tree/main/logo%20de%20telefe">Mas Info</a></button></div>
            </div>
            <div className="Card_principal">
                <div className="I_card">
                    <img src={Img_1} alt="foto de prueba" className="fot"/></div>
                <div className="P_card">Ecommerce</div>
                <div className="Btn_card"><button className="btn"><a href="https://github.com/arielesquivel/porfolio/tree/main/Ecommerce">Mas Info</a></button></div>
            </div>
            <div className="Card_principal">
                <div className="I_card">
                    <img src={Img_1} alt="foto de prueba" className="fot"/></div>
                <div className="P_card">Porfolio en HTML & CSS</div>
                <div className="Btn_card"><button className="btn"><a href="https://github.com/arielesquivel/porfolio/tree/main/porfolio">Mas Info</a></button></div>
            </div>
            <div className="Card_principal">
                <div className="I_card">
                    <img src={Img_1} alt="foto de prueba" className="fot"/></div>
                <div className="P_card">Porfolio React</div>
                <div className="Btn_card"><button className="btn"><a href="#">Mas Info</a></button></div>
            </div>
        </div>

    </div>    
)
}
}