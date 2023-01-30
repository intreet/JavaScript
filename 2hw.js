"Use strict";
const startNumber = 87;
console.log('исходное число:', startNumber);
const unitsNumber = (startNumber % 10);
const secondNumber = (startNumber - unitsNumber) / 10; 
const x = (unitsNumber * 10 + secondNumber);
console.log (x)
