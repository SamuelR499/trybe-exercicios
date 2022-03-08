let notaPorcentagem = 150;

// if (notaPorcentagem >= 90 && notaPorcentagem <=100){
//     console.log("A");
// }else if(notaPorcentagem >= 80 && notaPorcentagem < 90){
//     console.log("B");
// }else if(notaPorcentagem >= 70 && notaPorcentagem < 80){
//     console.log("C");
// }else if(notaPorcentagem >= 60 && notaPorcentagem < 70){
//     console.log("D");
// }else if(notaPorcentagem >= 50  && notaPorcentagem < 60){
//     console.log("E");
// }else if(notaPorcentagem < 50 && notaPorcentagem > 0){
//     console.log("F");
// }else if(notaPorcentagem < 0 || notaPorcentagem > 100){
//     console.log("Nota invalida");
// }


//observe bem a ordem da comparação, pois, só sera verificado a proxima linha se a atual for falsa.
if(notaPorcentagem < 0 || notaPorcentagem > 100){
    console.log("Nota invalida");
}else if(notaPorcentagem >=90){
     console.log("A");
}else if(notaPorcentagem >= 80){
    console.log("B");
}else if(notaPorcentagem >= 70){
    console.log("C");
}else if(notaPorcentagem >= 60){
    console.log("D");
}else if(notaPorcentagem >= 50){
    console.log("E");
}else{
     console.log("F");
}