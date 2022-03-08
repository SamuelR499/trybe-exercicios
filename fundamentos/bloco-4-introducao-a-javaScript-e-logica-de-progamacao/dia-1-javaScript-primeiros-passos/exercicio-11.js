const salarioBruto = 2000;
let inss = 0;
let ir = 0;
let salarioBase = 0;

//descubir INSS:
if(salarioBruto < 0 ){
    console.log("ERROR: VALOR INVALIDO!");
}else if(salarioBruto<= 1556.94){
    inss = 8/100; //Aliquota de 8%
    salarioBase = salarioBruto - (salarioBruto * inss);

}else if(salarioBruto <= 2594.92){
    inss = 9/100; //Aliquota de 9%
    salarioBase = salarioBruto - (salarioBruto * inss);
}else if(salarioBruto <= 5189.82){
    inss = 11/100; //Aliquota de 11%
    salarioBase = salarioBruto - (salarioBruto * inss);
}else{
    inss = 570.88;
    salarioBase = salarioBruto - inss;
}
var sbArredondado = parseFloat(salarioBase.toFixed(2));

//descubrir IR:
let aliquota = 0;
let parcela = 0;
if(salarioBase <= 1903.98){
    
}else if(salarioBase<= 2826.65 ){
    aliquota = 7.5/100;
    parcela = 142.80;
}else if(salarioBase <= 3751.05){
    aliquota = 15/100;
    parcela = 354.80;
}else if(salarioBase <= 4664.68){
    aliquota = 22.5/100;
    parcela = 636.13;
}else{
    aliquota = 27.5/100;
    parcela = 869.36;
}
//Salario liquido:
ir = (aliquota * salarioBase) - parcela;
var irArredondado = parseFloat(ir.toFixed(2));

console.log("= Salário bruto: ", "R$", salarioBruto);
console.log("- INSS: ", inss);
console.log("= Salário base: ", "R$", sbArredondado);
console.log("- IR: ", irArredondado);
console.log("------------------------");
console.log("= Salário liquído: ", sbArredondado - ir);