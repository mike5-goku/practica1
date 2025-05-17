import { useState } from 'react'


function App() {
  const [mitexto, setTexto] = useState('')


  const handle = (event) => {
const nuevotexto = event.target.value;
setTexto(nuevotexto);

  };



  return (
   <div>
    <div>
      Ingrese su texto
    </div>
<input type='text' value={mitexto} onChange={handle}/>
 <h3>Su Texto</h3>
  <p>
            {mitexto}
          </p>

    </div>
  );
}

export default App
