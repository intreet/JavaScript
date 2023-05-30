// (function(){

const main = document.querySelector(".main");
const form = document.createElement("form");
main.append(form);

let arrayRight = [];
let arraySrav = [];
let arrayButton = [];
let arrayVariant = [];

let count = 10;

const chet = document.createElement("p");
const chetLast = document.createElement("p");
let countLast = localStorage.getItem("chet");

main.append(chet);
main.append(chetLast);
chetLast.innerHTML = "Вы нашли пары в прошлой игре за " + countLast;
startGame();

function startGame() {
  let size = prompt("Введите размер поля: кратный 2");
  if (size % 2 == 0 && size != 0 && size > 0) {
    for (let i = 0; i < size / 2; i++) {
      arrayVariant.push(i);
      arrayVariant.push(i);
    }
    arrayVariant.sort(() => Math.random() - 0.5);
    console.log(arrayVariant);
    alert("Веселой игры!");
  } else {
    startGame();
  }
  GamePole(size);
  return size;
}
function GamePole(size) {
  for (let i = 0; i < size; i++) {
    let but = document.createElement("button");
    but.className = `button ${i}`;
    but.textContent = "Нажми меня";

    but.addEventListener("click", (e) => {
      e.preventDefault();
      but.disabled = true;
      but.textContent = arrayVariant[i];
      arraySrav.push(but);

      srav(size);
    });
    console.log(but.className);
    form.append(but);
  }
}

function chetcik() {
  localStorage.removeItem("chet");

  setInterval(() => {
    count += 1;
    chet.innerHTML = "С начала игры прошло " + count;
  }, 1000);
}
chetcik();
function srav(size) {
  setInterval(() => {
    if (arraySrav.length == 2) {
      if (arraySrav[0].textContent == arraySrav[1].textContent) {
        for (let i = 0; i < 2; i++) {
          arrayRight.push(arraySrav[i]);
        }

        if (arrayRight.length == size) {
          let answer = confirm("Вы победили! Хотите сыграть еще раз?");
          if (answer == true) {
            localStorage.setItem("chet", count);

            location.reload();
          } else {
            localStorage.setItem("chet", count);

            alert("Спасибо за игру!");
            window.close();
          }
        }
        console.log(arrayRight);
      } else {
        alert("Вы ответили неправильно");
        for (let i = 0; i < arraySrav.length; i++) {
          arraySrav[i].removeAttribute("disabled");
          arraySrav[i].textContent = "Нажми меня";
        }
      }
      arraySrav = [];
    }
  }, 1000);
}

// })

//     let but1 = document.createElement('button')
//     but1.className = 'but1'
//     but1.textContent='Кнопка 1'
//     let but2 = document.createElement('button')
//     but2.className = 'but2'
//     but2.textContent='Кнопка 2'
//     let but3 = document.createElement('button')
//     but3.className = 'but3'
//     but3.textContent='Кнопка 3'
//     let but4 = document.createElement('button')
//     but4.className = 'but4'
//     but4.textContent='Кнопка 4'
//     let but5 = document.createElement('button')
//     but5.className = 'but5'
//     but5.textContent='Кнопка 5'
//     let but6 = document.createElement('button')
//     but6.className = 'but6'
//     but6.textContent='Кнопка 6'

//     form.append(but1,but2,but3,but4,but5,but6)

// let buttons = document.querySelectorAll('button')

// but1.addEventListener('click', ()=>{
//     but1.setAttribute('disabled', true);
//     but1.textContent = "Привет"
//     arrayRight.append(but1)
//     dis()
//   })

//   but2.addEventListener('click', ()=>{
//     but2.setAttribute('disabled', true);
//     but2.textContent = "Привет"
//     arrayRight.append(but2)
//     dis()
//   })
//   but3.addEventListener('click', ()=>{
//     but3.setAttribute('disabled', true);
//     but3.textContent = "Пока"
//     arrayRight.append(but3)
//     dis()
//   })
//   but4.addEventListener('click', ()=>{
//     but4.setAttribute('disabled', true);
//     but4.textContent = "Пока"
//     arrayRight.append(but4)
//     dis()
//   })
//   but5.addEventListener('click', ()=>{
//     but5.setAttribute('disabled', true);
//     but5.textContent = "Ого"
//     arrayRight.append(but5)
//     dis()
//   })
//   but6.addEventListener('click', ()=>{
//     but6.setAttribute('disabled', true);
//     but6.textContent = "Ого"
//     arrayRight.append(but6)
//     dis()
//   })

// // let obj = [
// //     {
// //         number:but1,
// //         text:'Привет'
// //     },
// //     {
// //         number:but2,
// //         text:'Привет'
// //     },
// //     {
// //         number:but3,
// //         text:'Пока'
// //     },
// //     {
// //         number:but4,
// //         text:'Пока'
// //     },
// //     {
// //         number:but5,
// //         text:'Ого'
// //     },
// //     {
// //         number:but6,
// //         text:'Ого'
// //     },
// // ]

// function dis(){

//     console.log(arraySrav)

// }
