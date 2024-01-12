import {Fragment, React} from 'react';

import CounterApp from './CounterApp';
import PropTypes from "prop-types";

// ? Cuando existe un elemento que no usa hooks o no es propio del functional component, debería estar fuera del mismo.
const nombre = "Haziel";
const arreglo = [1,2,3,4,5,6,7,8,9,10];
const newPerson = {
    nombre: "Haziel",
    apellido: "Ortiz",
}

const getSaludo = () => { // Se puede renderizar el retorno de una función siempre y cuando no sea una Promise porque se considera un objeto.
    return "Hola Mundo desde una función"
}

const FirstApp = ( {title = "titulo por defecto", subTitle = 0} ) => {
    // console.log(props)
    // ! Para retornar más de un elemento, es necesario contar con un elemento padre o en su defecto de un Fragment <></>
  return (
    <>
        <h1>{ nombre}</h1>
        <h3>Props: { title }</h3>
        <h3>Props operaciones: { subTitle + 4 }</h3>
        <p>arreglo: { arreglo }</p>
        {/* Es importante tomar en cuenta que los objetos de JavaScript, no son permitidos como un React Child o hijo de un componente. */}
        {/* <span>{newPerson}</span> */}
        <p>{JSON.stringify(newPerson)}</p>
        <br/>
        <p>{ 2 * 5 }</p>
        <p>{ getSaludo() }</p>
        <h2>Soy un subtitulo</h2>

        {/* Tarea */}
        <h1>Tarea Práctica:</h1>
        <CounterApp value={5}/>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
}

export default FirstApp