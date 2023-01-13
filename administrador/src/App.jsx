import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { Listado } from "./components/Listado"
import { useState } from "react";


function App() {
  
  const [alumnos, setAlumnos] = useState([]);

  return (
    <div className="container mx-auto mt-10">
      <Header/>
      <div className='mt-20 flex'>
        <Formulario
        setAlumnos={setAlumnos}/>
        <Listado/>
      </div>
    </div>
  )
}

export default App
