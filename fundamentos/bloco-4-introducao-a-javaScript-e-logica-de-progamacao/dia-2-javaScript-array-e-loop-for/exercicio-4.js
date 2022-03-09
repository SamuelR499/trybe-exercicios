//caso o valor de uma media aritimetica seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaArray = 0;
for (let i = 0; i < numbers.length; i += 1) {
    somaArray += numbers[i];
}
let media = somaArray / numbers.length;
if(media > 20){
    console.log(media, " A média é maior que 20.");
}else{
console.log(media, " A média é menor que 20 :(");
}