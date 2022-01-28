import { Prodcuto, calculaISV } from "./06-desestructuracion-funcion";

/*
    ===== Código de TypeScript =====
*/
const carritoCompras: Prodcuto[] = [
    {
        desc: 'telefono 1',
        precio: 100
    },
    {
        desc: 'telefono 2',
        precio: 150
    }
];

const [total, isv] = calculaISV(carritoCompras)

console.log('Total: ' + total)
console.log('Isv: ' + isv)