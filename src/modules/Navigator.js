import React, { Component } from "react";
import logoCEMH from '../images/CEMHLogo.png';

class Navigator extends Component{
    render(){
        return(
            <div className="sticky-top" id="ContainerNavigator">
                <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top" id="Navigator">
                    <div className="container">
                    <img src={logoCEMH} alt="Logo CEMH" width="40px" height="40px"></img>
                    <a className="navbar-brand" href="/"><h4>CEMH</h4></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {/* Inicio */}
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Blog<span class="sr-only">(current)</span></a>
                            </li>
                            {/* ¿Quiénes somos? */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ¿Quiénes somos?</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/historiadelcentro">Historia del centro</a>
                                <a className="dropdown-item" href="/">Misión y filosofía</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Nuestro staff</a>
                                </div>
                            </li>
                            {/* Servicios */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Servicios
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Guardería</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Tanda extendida</a>
                                <a className="dropdown-item" href="/">Educación artística</a>
                                <a className="dropdown-item" href="/">Programas y modalidades</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Laboratorios de informática</a>
                                <a className="dropdown-item" href="/">Laboratorio de electrónica</a>
                                <a className="dropdown-item" href="/">Laboratorio de ciencias naturales</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Educación física, deportes y recreación</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Orientación y psicología</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Biblioteca</a>
                                </div>
                            </li>
                            {/* Estudiantes */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Estudiantes
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/">Calendario</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/">Listados de estudiantes meritorios</a>
                                </div>
                            </li>
                            {/* Galería */}
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                Galería
                                </a>
                            </li>
                            {/* Padres */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Padres
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/">Méritos y reconocimientos</a>
                                </div>
                            </li>
                            {/* Contacto */}
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contacto</a>
                            </li>
                            {/* Otras informaciones */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Otras informaciones
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/">Sistema de seguridad integral</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/">Política de privacidad</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        );
    };
}

export default Navigator;