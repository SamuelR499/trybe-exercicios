const custoProduto = 100;
const valorDeVenda = 200;
imposto = (20/100) * custoProduto;
valordeCustoTotal = imposto + custoProduto;
lucro = valorDeVenda - valordeCustoTotal;


if(custoProduto < 0 || valorDeVenda < 0 ){
    console.log("erro: Valor negativo!");
}else if(lucro < 0 ){
    console.log(" + Valor de venda: ", "R$",valorDeVenda);
console.log("- Custo do produto: ", "R$",custoProduto);
console.log("- Imposto: ", "R$",imposto);
console.log("--------------------");
console.log(" = prejuízo: ", "R$",lucro);
console.log(" = prejuízo de x1000 produtos: ", "R$", lucro * 1000);
}else{
    console.log(" + Valor de venda: ", "R$",valorDeVenda);
console.log("- Custo do produto: ", "R$",custoProduto);
console.log("- Imposto: ", "R$",imposto);
console.log("--------------------");
    console.log(" = lucro: ", "R$",lucro);
    console.log(" = lucro de x1000 produtos: ", "R$", lucro * 1000);
}