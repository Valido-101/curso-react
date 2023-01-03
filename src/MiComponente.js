// Importar módulos de react / dependencias
import React from "react";

// Función del componente

/* También se puede hacer así:
function MiComponente(){
    //Código como el de abajo
}
*/

const MiComponente = () => {

    //Las variables se pueden pasar de un componente a otro
    
    const nombre = "Jesus";
    const web = "jesusvalidoweb.es";

    const usuario = {
        nombre: 'Jesús',
        apellidos: 'Valido Zafra',
        web: 'jesusvalidoweb.es'
    };

    return (
        <div className="mi-componente">
            <h2>Componente Creado</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>
                    Nombre: <strong>{usuario.nombre}</strong>
                </li>
                <li>
                    Apellidos: <strong>{usuario.apellidos}</strong>
                </li>
                <li>
                    Web: <strong>{usuario.web}</strong>
                </li>
            </ul>
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