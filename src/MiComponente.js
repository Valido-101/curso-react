// Importar módulos de react / dependencias
import React from "react";

// Función del componente

/* También se puede hacer así:
function MiComponente(){
    //Código como el de abajo
}
*/

const MiComponente = () => {

    return (
        <div className="mi-componente">
            <hr/>
            <h2>Componente Creado</h2>
            <p>Este es mi primer componente</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </div>
    );
};

//Export
export default MiComponente;