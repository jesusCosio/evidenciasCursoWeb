import React, {useState} from 'react'

export const Formulario = ({setAlumnos}) => {
    const [nombre,setNombre]=useState('');
    const [correo,setCorreo]=useState('');
    const [grupo,setGrupo]=useState('');
    const [carrera,setCarrera]=useState('');
    const [fecha, setFecha]=useState('');
    const [observaciones,setObservaciones]=useState('');

    const [error,setError] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if([nombre, correo,grupo,carrera,fecha,observaciones].includes('')){
                setError(true);
                return;
        }

        setError(false);
        const objetoEstudiante = {
            nombre,
            correo,
            grupo,
            carrera,
            fecha,
            observaciones
        }
        setAlumnos(objetoEstudiante);
        limpiarCampos();
        
    }
    const limpiarCampos = () =>{
        setNombre('');
        setCorreo('');
        setGrupo('');
        setCarrera('');
        setFecha('');
        setObservaciones('');
    }
  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-center'>Seguimiento de estudiantes</h2>
        <p className='text-center mb-3'>Agrega estudiantes y <span className='text-red-500'>Adminístralos</span></p>
        <form 
            className=' bg-zinc-400 shadow-md py-6 px-5 text-white rounded-md'
            onSubmit={handleSubmit}
            >
                {
                    error && (
                    <div className='bg-red-500 text-center rounded-lg'>
                        <p>Hay un error</p>
                    </div> 
                    )
                }
            <div>
                <label htmlFor='nombre' className='block uppercase'>Nombre estudiante</label>
                <input
                    id='nombre'
                    type="text" 
                    placeholder='Nombre estudiante'
                    className=' border-2 w-full p-2 placeholder: text-gray-300 rounded-lg mb-10'
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='correo' className='block uppercase'>Correo</label>
                <input
                    autoComplete='false'
                    id='correo'
                    type="email" 
                    placeholder='Correo'
                    className=' border-2 w-full p-2 placeholder: text-gray-300 rounded-lg mb-8'
                    value={correo}
                    onChange={(e)=> setCorreo(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='grupo' className='block uppercase'>Grupo</label>
                <input
                    id='grupo'
                    type="text" 
                    placeholder='Grupo'
                    className=' border-2 w-full p-2 placeholder: text-gray-300 rounded-lg mb-8'
                    value={grupo}
                    onChange={(gr)=> setGrupo(gr.target.value)}
                />
            </div>
            <div>
                <label htmlFor='carrera' className='block uppercase'>Carrera</label>
                <input
                    id='carrera'
                    type="text" 
                    placeholder='Carrera'
                    className=' border-2 w-full p-2 placeholder: text-gray-300 rounded-lg mb-8'
                    value={carrera}
                    onChange={(e)=> setCarrera(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='fecha' className='block uppercase'>Fecha</label>
                <input
                    id='fecha'
                    type="date" 
                    className=' border-2 w-full p-2 placeholder: text-gray-300 rounded-lg mb-8'
                    value={fecha}
                    onChange={(e)=> setFecha(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='observaciones' className='block uppercase'>Observaciones</label>
                <textarea 
                    id='observaciones'
                    className='border-2 w-full rounded-lg'
                    placeholder='Escribe tu comentario'
                    value={observaciones}
                    onChange={(e)=> setObservaciones(e.target.value)}
                />
            </div>
            <input
                type='submit'
                className='bg-indigo-400 w-full mb-8 hover:bg-slate-500 cursor-pointer mt-8'
                value={'Registrar cita'}
            />
        </form>
    </div>
  )
}
