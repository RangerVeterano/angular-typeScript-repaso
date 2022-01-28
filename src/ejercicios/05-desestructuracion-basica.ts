/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anyo: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 30,
    cancion: 'Sonochino koiku',
    detalles: {
        autor: 'jojo',
        anyo: 1988
    }
}

//desestructurar objeto

const { volumen, segundo, cancion, detalles } = reproductor
const { autor: autorDetalle } = detalles;

console.log('El volumen acutal es de : ' + volumen)
console.log('El segundo acutal es de : ' + segundo)
console.log('La cancion acutal es de : ' + cancion)
console.log('El autor es : ' + autorDetalle)


//desestructurar arreglo

const dbz:string[] = ['Goku', 'vegetta', 'Trunks'];

const [,,p3] = dbz;

console.log('Personaje 1: ' + dbz[0])
console.log('Personaje 1: ' + dbz[1])
console.log('Personaje 1: ' + p3)