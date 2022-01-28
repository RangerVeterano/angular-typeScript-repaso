/*
    ===== Código de TypeScript =====
*/

let habilidades: (boolean | string | number)[] = ['Bash', 'Counter', 'Healing', 100];

// habilidades.push('Cadena de texto')

//Esto es solo para asegurarnos de como se tiene que ver el objeto que queramos
interface Personaje {
    nombre: string;
    hp:number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: "Ranger Veterano",
    hp: 100,
    habilidades: ["habilidad 1", "Habilidad 2", "Habilidad 3"]
};

personaje.puebloNatal = 'Alumdaina';

console.table(personaje);