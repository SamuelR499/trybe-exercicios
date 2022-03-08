//3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const a = 8;
const b = 9;
const c = 7;

if (a > b && a > c) {
        console.log(a, " é o maior valor");
    }else if (b > a && b > c){
        console.log(b, " é o maior valor");
    }else{
        console.log(c, "é o maior valor")
    }