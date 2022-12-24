import React from 'react';
import PropTypes from 'prop-types';

export default function TercerComponente({nombre, apellidos, ficha}) {

    //console.log(props);

  return (
    <div>
        <h1>Comunicación entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha.alergias}</li>
            <li>{ficha.estado}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.altura}</li>
        </ul>
    </div>
  )
}

//Validación de props
TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    ficha: PropTypes.object
}