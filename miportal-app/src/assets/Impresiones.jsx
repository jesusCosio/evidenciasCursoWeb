import { personajes } from "../data/data"

console.log(personajes)

export const Impresiones = () => {

const estudiantes = ['Xenia', 'Mony','Ivan']

  return (
   <>
   <h1>
    Mis Estudiantes
   </h1>
   <ol>
    {estudiantes.map((estudiante, key) =>{
        return <li key ={key}>{estudiante}</li>
    })}
   </ol>

   </>
  )
}
