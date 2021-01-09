
import { Fragment } from 'react';

//css
import Formulario from './components/Formulario';


function App() {
  return (
    <Fragment>
      <h1>PEDIDOS DE DOGOS MOYO´S</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
