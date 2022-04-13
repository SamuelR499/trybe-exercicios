
//usando  Rest
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current);
console.log(sum(2, 3, 4, 5, 6));

// usando um for tradicional
let result = 0;
const sumFor = (...args) => {
    for (i of args) {
        
        result += i;
    }
    return result
}
console.log(sumFor(2,4,8));