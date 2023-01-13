const tecnologias = ['JavaScript', 'Java', 'React', 'php', 'Python'];
//regresar el arreglo manipulado
const tech = tecnologias.map(lenguaje => {
    if( lenguaje === 'React'){
        return 'Tecnologia detectada';
    } else{
        return lenguaje;
    }
});

console.log(tech)

const edades = [20,40,60,30,50,12,5,50,3,24,56,25,24,6,78,12];

const arr30 = edades.filter(edad => edad > 30);

console.log(arr30);
// Si todos los elementos cumplen regresa true
const arrEvery = edades.every(edad => edad > 2);
console.log(arrEvery);

// acumula en el total
const arrReduce = edades.reduce((total, edades) => edades + total, 0);

console.log(arrReduce);

