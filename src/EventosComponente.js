import React from 'react'

export const EventosComponente = () => {

    const handlerClick = (e, nombre) => {
        alert(nombre + ", has dado click al botón");
    }

  return (
    <div>
        <h1>Eventos en React</h1>
        {/*Evento click*/}
        <button onClick={ e => handlerClick(e, "Jesús") }>Hola, haz click</button>
    </div>
  )
}
