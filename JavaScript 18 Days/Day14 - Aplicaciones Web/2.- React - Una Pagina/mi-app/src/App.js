import React from "react";
import Saludo from "./saludo";
import Mensaje from "./Mensaje";

function App() {
  return (
    <div>
      <Saludo nombre = "David"/>
      <Mensaje mensaje = "Bienvenido a mi aplicación React"/>
      <Saludo nombre = "José"/>
    </div>
  )
}

export default App;