import React from 'react'

export const EventosComponente = () => {

    const handlerClick = (e, nombre) => {
        alert(nombre + ", has dado click al botón");
    }

    function handlerDoubleClick(e){
        alert("Has dado doble click");
    }

    const handlerOnMouseEnter = (e) => {
        console.log("Has entrado en la caja");
    }

    const handlerOnMouseLeave = (e) => {
        console.log("Has salido de la caja");
    }

    const handlerOnFocus = (e) => {
        console.log("Estás dentro del input, mete tu nombre")
    }

    const handlerOnBlur = (e) => {
        console.log("Estás fuera");
    }

  return (
    <div>
        <h1>Eventos en React</h1>

        <p>
            {/*Evento click*/}
            <button onClick={ e => handlerClick(e, "Jesús") }>Hola, haz click</button>
        </p>

        <p>
            {/*Evento doble click*/}
            <button onDoubleClick={handlerDoubleClick}>Hola, haz doble click</button>
        </p>

        <div id="caja" onMouseEnter={handlerOnMouseEnter} onMouseLeave={handlerOnMouseLeave}>
            {/*Evento on mouse enter*/}
            Pasa por encima!!
        </div>

        <p>
            <input type="text" onFocus={handlerOnFocus} onBlur={handlerOnBlur} placeholder="Introduce tu nombre"/>
        </p>
        
    </div>
  )
}
