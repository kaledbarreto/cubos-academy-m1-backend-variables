const r = 5, h = 16;
let at = 0;

at = (2 * (Math.PI * Math.pow(r, 2)) + (2 * (Math.PI * r * h)));

console.log(`A área total de um cilíndro com raio ${r} e altura ${h} é de: ${at.toFixed(1)}`);
