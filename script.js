let numberAdults = prompt('Quantos adultos que consomem bebida alcoólica estarão presentes nesse churrasco?');
let numberAdultsNoAlcohol = prompt('Quantos adultos que não consomem bebida alcoólica estarão presentes nesse churrasco?');
let numberChildren = prompt('Quantas crianças estarão presentes nesse churrasco?');

let totalAdults = Number(numberAdults) + Number(numberAdultsNoAlcohol);
let totalPeople = Number(totalAdults) + Number(numberChildren);

let totalMeat = Number((0.2 * numberChildren)) + Number((0.4 * totalAdults));
let sideDishes = 0.2 * totalPeople;
let beer = numberAdults * 2;
let soda = totalPeople * 0.5;
let water = totalPeople * 0.4;

if (totalAdults === 0) {
    alert('Não é possível fazer um churrasco sem adultos responsáveis!');
} else {
    alert(`A quantidade de carne necessária será ${totalMeat.toFixed(2)}KG`);
    alert(`A quantidade de acompanhamentos necessários será de ${sideDishes.toFixed(2)}KG`);
    alert(`A quantidade de cerveja necessária será de ${beer.toFixed(2)}L`);
    alert(`A quantidade de refrigerante necessário será de ${soda.toFixed(2)}L`);
    alert(`A quantidade de água necessária será de ${water.toFixed(2)}L`);
}
