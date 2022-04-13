const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
    // escreva seu código aqui
    // const xablau = [];
    // for (let i = 0; i < arrays.length; i++) {
    //     // console.log(arrays[i]);
    //     for (let z = 0; z < arrays[i].length; z++) {
    //         console.log();
    // xablau.push(arrays[i][z]);
    //     }

    // }
    // return xablau;
    
    return arrays.reduce((accArray, valor) => accArray.concat(valor), []);
}


console.log(flatten());