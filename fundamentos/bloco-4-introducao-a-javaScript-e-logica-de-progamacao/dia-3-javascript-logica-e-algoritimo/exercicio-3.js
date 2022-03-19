/*3. Considere o array de strings abaixo:

    let array = ['java', 'javascript', 'python', 'html', 'css'];

Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
*/
let array = ['java', 'javascript', 'python', 'html', 'css'];
maiorString = 0;
nomeMaiorStg = "";
for (let index = 0; index < array.length; index++) {
    if (maiorString < array[index].length) {
        maiorString = array[index].length;
        nomeMaiorStg = array[index];
    };

};
console.log(nomeMaiorStg);
menorString = maiorString;
nomeMenorStg = "";
for (let index2 = 0; index2 < array.length; index2++) {
    if (menorString > array[index2].length) {
        menorString = array[index2].length;
        nomeMenorStg = array[index2];
    };
    
};
console.log(nomeMenorStg);
