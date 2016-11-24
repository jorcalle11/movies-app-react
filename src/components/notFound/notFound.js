import React from 'react'

const NotFound = (props) => {
  console.log(props);
  return(
    <div className="alert">
      <h4>Ruta <small>{props.params.splat}</small> no encontrada!!!</h4>
      <p>Regresar al <a href="/">home</a></p>
    </div>
  )
}
export default NotFound