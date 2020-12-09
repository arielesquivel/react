import React, { Component } from 'react';
import Perfil from '../img/perfil.png';
import gmail from '../logos/gmail.svg';
import git from '../logos/github.svg';
import IG from '../logos/instagram.svg';
import slack from '../logos/slack.svg';
import photoshop from '../logos/photoshop.svg';
import linkedin from '../logos/linkedin.svg'

export default class Header extends Component {
    render() {
        return (
            <header>
             <div class="parent">
                    <div class="div1"> 
                        <h2>Hello My Name is:</h2>
                        <h1>Ariel A Esquivel</h1>
                        <p><strong>Programador </strong>web</p>
                    </div>
                    <div class="div2">
                        <ul className="tex_presentacion_logos">
                            <li>
                            <a href="arielesquivelpc@gmail.com"><img src={gmail} alt="logo" className="gmail"/></a>
                            </li>
                            <li>
                            <a href="https://github.com/arielesquivel/porfolio"><img src={git} alt="logo" className="git"/></a>
                            </li>
                            <li>
                            <a href="https://join.slack.com/t/nuevoespaciod-wf71044/shared_invite/zt-js9zqpms-FOv4WFEEzlAvqN2RC6Yt~w"><img src={slack} alt="logo" className="slack"/></a>
                            </li>
                            <li>
                            <a href="https://www.linkedin.com/in/ariel-alejandro-esquivel-52b01b187/"><img src={linkedin} alt="logo" className="ps"/></a>
                            </li>
                        </ul> 
                    </div>
                    <div class="div4">
                    <img src={Perfil} alt="imagen secundaria" className="FP"/>
                    </div>
                </div>
            </header>
        )
    }
}
