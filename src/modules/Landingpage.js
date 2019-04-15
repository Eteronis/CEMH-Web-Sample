import React, { Component } from 'react';
import fechaAbril from '../images/fechaAbrilCEMH.jpeg';
import facebook from '../images/SiguenosFacebook.jpeg';

class Landingpage extends Component{
    render(){
        return(
            <div className="container" id="landingContainer">
                <div className="row">
                    <div className="col" id="BienvenidosPortal">
                        <h2>Bienvenidos al portal del Colegio Eugenio María de Hostos</h2>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-12" id="AvisosImportantes">
                        <h3>¡Avisos importantes!</h3>
                            <p>Calendario académico: <a href="/">Aquí</a></p>
                            <p>Para toda la familia Hostosiana, tenemos todas las fechas importantes del mes de abril.</p>
                            <p>↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓-↓</p>
                    </div>
                    <div className="row">
                        <div className="col offset-5" id="imgAbril">
                            <img src={fechaAbril} alt="Fecha Abril CEMH" width="600px" height="600px"></img>
                            <p>----------------------------------------------------------</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                        <div className="col" id="SiguenosFacebook">
                            <p>Síguenos en <a className="btn btn-primary" href="https://twitter.com/cemhlv/" target="blank">Twitter:</a></p>
                            <p>Síguenos en <a className="btn btn-primary" href="https://web.facebook.com/cemhlv/" target="blank">Facebook:</a></p>
                            <img src={facebook} alt="Síguenos en Facebook"></img>
                        </div>
                    </div>
            </div>
        );
    };
}

export default Landingpage;

