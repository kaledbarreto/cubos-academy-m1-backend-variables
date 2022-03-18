const c = 1000, i = 0.125, t = 5;
let m = 0.0;

m = c * Math.pow((1 + i), t);

console.log(`O montante é: ${Math.round(m)}`);