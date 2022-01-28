/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = 'overrride';
    };
}

@classDecorator
class miSuperClase {
    public miPropiedad: string = 'ABC123'
    imprimir() {
        console.log('hola mundo');
    }
}

console.log(miSuperClase)

const miClase = new miSuperClase()

console.log(miClase.miPropiedad);