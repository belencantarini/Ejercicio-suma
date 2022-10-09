let resultado = 0;
let a = 0;

function suma(a) {
    resultado += a;
    return resultado;
}

for (let i = 0; i < 5; i++) {
    let n = Number(prompt("Ingrese un numero"));
    suma(n);
    document.write("El numero ingresado fue " + n + ".<br>")
}

document.write("El resultado de la suma de esos 5 numeros es " + resultado + ".");


console.log(resultado);


