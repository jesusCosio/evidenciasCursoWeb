
//function saludar(nombre){
//    return `Hola ${nombre}`;
//}

//sintaxis nueva la flecha sustituye la palabra function

const saludar = (nombre) =>{
    return 'Jesus';
}

console.log(`Saludando de nuevo a ${saludar()}`);


const arr=['arroz', 'pasta','pan',];

arr.map(function item(elemento){
    console.log(elemento);
})

arr.map(elemento => {
    console.log(elemento);
})

const newArr = arr.map(elemento => {
    return elemento.toUpperCase();
})

console.log(newArr);