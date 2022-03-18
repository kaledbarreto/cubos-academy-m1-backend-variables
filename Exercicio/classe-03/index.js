const dinheiro = 80.00, tenis = 129.99;
let desconto = 0;

desconto = 100 - ((100*dinheiro) / tenis);

console.log(`Desconto necessário: ${Math.round(desconto)}%`);