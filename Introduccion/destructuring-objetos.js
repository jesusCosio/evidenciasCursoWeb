//Destructuracion

const persona = {
    nombre: 'Peter Parker',
    edad: 20,
    Clave: 'Spiderman',
    superpoder:'EscalaParedes'
};

const {Clave, nombre: propiedad_nombre, edad}=persona;
//console.log(propiedad_nombre);

//console.log(`Hola ${propiedad_nombre} tienes ${edad} años y eres ${Clave}`);


//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.Clave);

const imprimePersona = ({nombre, edad, Clave, superpoder = 'Lanza telaraña'}) => {
    //console.log(`Hola ${nombre} tienes ${edad} años y eres ${Clave} y tu super poder es ${superpoder}`);
    return {
        nombreClave : Clave, 
        superPower: superpoder
    }
}
const avenger = imprimePersona( persona);

const {nombreClave:heroe, superpoder} = avenger;

console.log(avenger);