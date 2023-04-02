"use strict";
// задание 1
let x1 = 5;
let y1 = 1;
let x2 = 30;
let y2 = 8;
let znach1 = (x2 - x1);
let znach2 = (y2 - y1);
let square = znach1 * znach2;
console.log("Площадь прямоуголиника: ", Math.abs(square));

// задание 2

const a = 13.123456789;
const b = 2.123;
const n = 5;

let name1 = Math.floor((a % 1) * 10 ** n);
let name2 = Math.floor((b % 1) * 10 ** n);
console.log("Первое число: ", name1, "Второе число: ", name2);

console.log(name1 > name2);
console.log(name1 < name2);
console.log(name1 >= name2);
console.log(name1 <= name2);
console.log(name1 === name2);
console.log(name1 != name2);

/// задание 3

const j = 0;
const m = 100;
const m1 = m - j;  
const l = Math.floor(Math.random() * m1) + j;
const c = Math.floor(l / 2);
const p = c * 2 + 1;
console.log(p);