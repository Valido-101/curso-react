import React from 'react'

export const SegundoComponente = () => {

    const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];
    //const libros = [];

  return (
    <div className='segundo-componente'>
        <h1>Listado de libros</h1>
        {libros.length >= 1 ? (
            //Si se cumple
            <ul>
                {
                    libros.map((libro, indice) => {
                        return <li key={indice}>{libro}</li>;
                    })
                }
            </ul>
            )
            : (
            //Si no se cumple
            <p>No hay libros</p>
            )
        }
    </div>
  )
}