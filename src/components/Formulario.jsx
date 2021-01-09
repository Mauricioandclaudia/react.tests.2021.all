
import React, { Fragment, useState } from 'react';

const Formulario = () => {
  // Creando state de pedidos
  const [pedido, actualizarPedido] = useState({
    persona: "",
    dogo: "",
    hora: "",
    fecha: "",
    descripcion: "",
  });

  const [error, actualizarError] = useState(false);

  // Funcion que se ejecuta cada que el usuario escribe en un input aqui le vamos a pasar un evento "e" "evento" en ves de "()""
  const actualizarState = (e) => {
    actualizarPedido({
      ...pedido,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores
  const { persona, dogo, hora, fecha, descripcion } = pedido;

  // Cuando el usuario presiona agregar pedido "onsubmit={submintcita}" esta dentro del form
  const submitPedido = e => {
    e.preventDefault();

    // Validar
    if (
      persona.trim() === "" ||
      dogo.trim() === "" ||
      hora.trim() === "" ||
      fecha.trim() === "" ||
      descripcion.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    // Eliminar el mensaje de ERROR
    actualizarError(false);

    // Asignar un ID     En este ejemplo vamos a dar el ID manual y loca, a que me refiero, que no tenemos una BD ya que la BD asigna el ID.   Vamos a instalar
    pedido.id = 33;
    console.log(pedido);
  };

 

  return (
    <Fragment>
      <h3>Has tu pedido aquí !!! Gracias</h3>

      { error ? (
         <p className="ALERTA DE ERROR">Todos los campos son Obligatorios</p>
      ) : null}

      <form onSubmit={submitPedido}>
        <label>nombre de la persona</label>
        <input
          type="text"
          name="persona"
          className="u-full-width"
          onChange={actualizarState}
          value={persona}
        />

        <label>Nobre de la hamburgueha</label>
        <input
          type="text"
          name="dogo"
          className="u-full-width"
          onChange={actualizarState}
          value={dogo}
        />

        <label>hora de llegada</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>fecha estimada</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>describa los ingredientes</label>
        <textarea
          className="u-full-width "
          name="descripcion"
          onChange={actualizarState}
          value={descripcion}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          agragar pedido
        </button>
      </form>
    </Fragment>
  );
}
 
export default Formulario;