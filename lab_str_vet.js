"use Stricke"
// Задание 1
let password = "204_";
let defender = password.length;
let def = defender >= 4 ? (password.includes("-"), password.includes("_")) ? console.log("пороль соответствует") : console.log("пароль не соответствует требованиям") : console.log("пароль не соответствует требованиям")

//Задание 2
let name = "СтеПан";
let surname = "иногОр";
let name1 = name[0].toUpperCase();
let name2 = name1 + name.toLowerCase().slice(1);
let surname1 = surname[0].toUpperCase();
let surname2 = surname1 + surname.toLowerCase().slice(1);
console.log(name2);
console.log(surname2);
