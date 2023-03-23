let otvet = Math.floor(Math.random() * 10)
let input = prompt("Введите число")

function games() {
  
  if (input === null) {
    return;
  } else if (parseInt(input) > otvet) {
    input = prompt("Меньше!")
    games();
  } else if (parseInt(input) < otvet) {
    input = prompt("Больше!")
    games();
  } else if (parseInt(input) === otvet) {
    alert("Правильно!")
  }else if (isNaN(parseInt(input))) {
    input = prompt("Не число!")
    games();
  }

}

games()
