/*
    ===== Código de TypeScript =====
*/

export interface Prodcuto {
    desc: string;
    precio: number;
}

const telefono: Prodcuto = {
    desc: 'Nokia a1',
    precio: 150
}

const tableta: Prodcuto = {
    desc: 'Ipad Air',
    precio: 350
}

export function calculaISV(productos: Prodcuto[]): number[] {
    let total = 0;

    //De esta forma conseguimos desestructurar el objeto
    productos.forEach(({ precio }) => {
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos: Prodcuto[] = [telefono, tableta]

//Desestructuracion sobre el arreglo devuelto en la funcion
const [total, isv] = calculaISV(articulos);

console.log('Total ', total);
console.log('ISV ', isv);