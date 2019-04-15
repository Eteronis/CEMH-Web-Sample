import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="container-fluid fixed-bottom" id="FooterContainer">
                <div className="navbar navbar-ligth" id="Navigator">
                    <div className="col">
                        <p>Colegion Eugenio María de Hostos.</p>
                    </div>
                    <div className="col">
                        <p>besoft Inc.</p>
                    </div>
                </div>
            </div>
        );
    };
}

export default Footer;