import React from "react";
import "./SobreNosotros.scss";

const SobreNos = () => {
  return (
    <div id="Nosotros" className="NosotrosContainer">
      <div className="Contenedor_general">
        <div className="Titulo_Container">
          <h1 className="titulo_style">Nuestro Proceso de Trabajo</h1>
        </div>
        <div className="MainSteps">
          <div className="steps">
            <p className="pMobile">1<br />Inspección</p>
          </div>
          <div className="steps">
            <p className="pMobile">2<br />Pre-Tratamiento</p>
          </div>
          <div className="steps">
            <p className="pMobile">3<br />Limpieza Profunda</p>
          </div>
          <div className="steps">
            <p className="pMobile">4<br />Inspección Final</p>
          </div>
          <div className="steps">
            <p className="pMobile">5<br />Secado Rápido</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;
