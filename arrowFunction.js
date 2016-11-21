var inputs = process.argv.slice(2);
var result = inputs.map(x => x[0].toUpperCase())
                   .reduce((acccumulator, current) => accumulator + current);
console.log(result);
