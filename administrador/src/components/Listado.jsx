import React from 'react'
import { Estudiante } from './Estudiante'

export const Listado = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
        <h2 className='font-black text-center'>Lista de estudiantes</h2>
        <p className='text-center mb-3'>Estudiantes y citas</p>

        <Estudiante/>
        <Estudiante/>
        <Estudiante/>
        <Estudiante/>
        <Estudiante/>
        <Estudiante/>    

    </div>
  )
}
