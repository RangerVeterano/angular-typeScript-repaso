/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {

    constructor(
        public nombre: string,
        public direccion: string
    ) {

    }
}

class hero extends PersonaNormal {
    // alterEgo: string; //Solo se ve dentro de esta clase
    // edad: number; //Se puede ver desde fuera
    // nombreReal: string; //Se puede ver sin tener que crear la instancia

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, 'New York, USA');
        this.alterEgo = alterEgo;
    }
}

const ironman = new hero('Ironman', 45, 'Tony');
console.log(ironman);