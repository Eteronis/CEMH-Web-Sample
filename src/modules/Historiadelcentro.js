import React, { Component } from 'react';
import hugoEstrella from '../images/hugoestrella.jpg'

class Historiadelcentro extends Component{
    render(){
        return(
            <div className="container" id="landingContainer">
                <div className="row">
                    <div className="col pt-4" id="historiaTitle">
                        <h1>Historia del centro.</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col offset-1" id="imgHistoria">
                        <img src={hugoEstrella} alt="HugoEstrella" width="930px" height="314px"  />
                    </div>
                </div>
                <div className="row">
                    <div className="col" id="contentHistoria">
                        <p>El Colegio Eugenio María de Hostos nace en el año 1975 con todos los grados de los niveles inicial 
                            y básico con una matrícula de 160 estudiantes inscritos. Cinco años después, cuando ya se había 
                            incluido el Nivel Medio, después de salida la primera promoción de bachilleres, la honorable Secretaría 
                            de Educación, otorga en reconocimiento a la efectiva labor, la Libre Conducencia o Autonomía, 
                            convirtiéndonos en el primer colegio del país en otorgársele tal condición en tan breve tiempo.</p>
                        <p>El colegio surge como una institución que podía llenar una necesidad, sobre la base de mejorar la calidad 
                            de la educación específicamente en la parte académica.</p>  
                        <p>A nuestro centro, en sus orígenes, los estudiantes que estaban inscritos en la tanda matutina debían asistir 
                            en la tarde con el fin de recibir reforzamiento.</p>      
                        <p>Entre sus fundadores cabe destacar a los educadores: Lic. Hugo Estrella, Rafael Estrella, Irma Estrella, 
                            Miladys Comprés, Leda Núñez, Ramón Rosario, Elena Capellán, Ramón Vásquez, Luis Ruiz, Estela Pérez, Lesbia 
                            Cortorreal, Celenia Guzmán, María Lilian Lara (Mimi) y como personal de apoyo: Raquel Guzmán.</p> 
                        <p>En este momento el colegio ha entregado a las familias dominicanas treinta y cuatro promociones con más 
                            de tres mil cien bachilleres, de cuyos, cerca de un 86% ha obtenido éxito en los estudios superiores esparciendo 
                            su saber por todo el globo terráqueo sobre la base de una formación integral, fundamentada en el sistema de la 
                            Educación Renovada, lo que nos convierte en pioneros en la utilización de esos avances educativos cuyo principal 
                            objetivo se orienta en favorecer el ser Humano con sus virtudes y debilidades.</p>       
                    </div>
                </div>
            </div>
        );
    };
}

export default Historiadelcentro;