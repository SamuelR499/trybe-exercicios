const bispo = "bispo";
const peao = "peão";
const cavalo = "cavalo";
const torre = "torre";
const rei = "rei";
const rainha = "rainha";

let piece = "bispo";

if (piece == bispo){
    console.log("O", bispo, " ele anda na diagonal e somente na diagonal ele come na diagonal e nao pode passar por cima de nenhuma peça");
}else if(piece == peao){
    console.log("O", peao, " só anda para frente, pode andar 2 casa de uma vez na primeira jogada nas outras somente 1 casa, o peão come na diagonal e nao pode andar para trás.");
}else if(piece == cavalo){
    console.log("O", cavalo, " anda em L, pode passar por cima de outras peças mas aonde ele ira parar tem que estar vazio ou com uma peça do adversário.");
}else if(piece == torre){
    console.log("A" ,torre, " ela anda para frente ou para o lado quantas casas quiser por jogada... não pode passar por cima de nenhuma peça.");
}else if(piece == rei){
    console.log("O", rei, " só pode andar uma casa por jogada");
}else if(piece == rainha){
    console.log("A ", rainha, " pode fazer qualquer jogada de qualquer peça por isso a rainha é a 2° peça mais importante a primeira é claro é o rei que se for morto o jogo acaba");
}else{
    console.log("essa peça não existe, tente um das opções: peão, cavalo, torre, bispo, rainha, rei");
}