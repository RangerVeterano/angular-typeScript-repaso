/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return (a + b);
}

//funcion de flecha
const sumarFlecha = (a: number, b: number): number => a + b;

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

//console.log(multiplicar(5, 0, 10));

interface PersonajeLOR {
    nombre: string;
    pv: number;
    verVida: () => void;
    

}

//no regresa nada
function curar(personaje: PersonajeLOR, puntos): void {
    personaje.pv += puntos;
    // console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Ignacio",
    pv: 50,
    verVida() {
        console.log('Puntos de vida: ' + this.pv);
    }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.verVida();