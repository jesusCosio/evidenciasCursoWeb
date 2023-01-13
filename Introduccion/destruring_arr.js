//Ejercicio
const useState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}]
};

const arr = useState('JavScript);')
console.log(arr);

arr[1]();

// Tarea: Desestructurar el arreglo y la función deberá llamarse getSaludo

const [,getSaludo] = useState();
getSaludo();