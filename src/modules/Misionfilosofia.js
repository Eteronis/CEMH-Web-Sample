import React, { Component } from 'react';
import misionfilosofia from '../images/misionfilosofia.png';

class Misionfilosofia extends Component{
    render(){
        return(
            <div className="container" id="landingContainer">
                <div className="row">
                    <div className="col" id="misionfTitle">
                        <h1>Misión y Filosofía</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col offset-1" id="misionfilosfia">
                        <img src={misionfilosofia} alt="Misión y Filosofía" width="930" height="314" />
                    </div>
                </div>
                <div className="row">
                    <div className="col" id="misionfTitle">
                        <h3>Principios filosóficos.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col" id="principiosfilosoficos">
                        <p>Nos ajustamos a la concepción del humanismo cristiano, teniendo como eje fundamental, 
                            EL TEMOR DE DIOS, para una formación integral a través de los valores que nos legara 
                            el Maestro Eugenio María de Hostos, y que, así se expresa en nuestro lema divisa, el cual 
                            se inscribe en los sublimes términos: AMOR, DISCIPLINA y ENSEÑANZA.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col" id="misionfTitle">
                        <h3>Nuestra misión.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col" id="principiosfilosoficos">
                        <p>Construir, con firme  decisión, en la formación integral de nuestros niños y adolescentes, 
                            mediante la efectiva utilización de una educación científica, ajustada ésta plenamente, 
                            hacia la consecución de los valores del SER HUMANO.</p>
                    </div>
                </div>
            </div>
        );
    };
}

export default Misionfilosofia;