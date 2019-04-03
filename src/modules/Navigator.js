import React, { Component } from "react";

class Navigator extends Component{
    render(){
        return(
            <div className="container-fluid" id="ContainerNavigator">
            <nav class="navbar navbar-expand-lg navbar-light" id="Navigator">
                <a class="navbar-brand" href="/"><h4>CEMH</h4></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Inicio<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ¿Quiénes somos?</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Historia del centro</a>
                        <a class="dropdown-item" href="#">Misión y filosofía</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Nuestro staff</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Servicios
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Guardería</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Tanda extendida</a>
                        <a class="dropdown-item" href="#">Educación artística</a>
                        <a class="dropdown-item" href="#">Programas y modalidades</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Laboratorios de informática</a>
                        <a class="dropdown-item" href="#">Laboratorio de electrónica</a>
                        <a class="dropdown-item" href="#">Laboratorio de ciencias naturales</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Educación física, deportes y recreación</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Orientación y psicología</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Biblioteca</a>
                        </div>
                    </li>
                    </ul>
                   </div>
                </nav>
            </div>
        );
    };
}

export default Navigator;