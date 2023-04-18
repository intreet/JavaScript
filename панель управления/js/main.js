let mass_students = [
  {
    name: "имя",
    surname: "фамилия",
    secondname: "отчество",
    bornDate: "дата рождения",
    learnDateStart: "дата начала обучения",
    faculty: "факультет",
  },
  {
    name: "Игорь",
    surname: "Алексеев",
    secondname: "Алексеевич",
    bornDate: "15.09.2004",
    learnDateStart: "1.09.2020",
    faculty: "программист",
  },
  {
    name: "",
    surname: "",
    secondname: "",
    bornDate: "",
    learnDateStart: "",
    faculty: "",
  },
  {
    name: "",
    surname: "",
    secondname: "",
    bornDate: "",
    learnDateStart: "",
    faculty: "",
  },
  {
    name: "",
    surname: "",
    secondname: "",
    bornDate: "",
    learnDateStart: "",
    faculty: "",
  },
  {
    name: "",
    surname: "",
    secondname: "",
    bornDate: "",
    learnDateStart: "",
    faculty: "",
  },
];
let date = new Date(2000, 9, 1);
console.log(date);

function CreateTable() {
  let table = document.querySelector("#start");

  table.innerHTML += `
 <div class="studentTableDiv" id="studentTableDiv">
     <table id = "table">
            <tr>
                <th>имя
                <input type = "text" class="input" id="input">
                </th>
                <th>фамилия
                <input type = "text"class="input" id="input">
                </th>
                <th>отчество
                <input type = "text"class="input" id="input">
                </th>
                <th>дата рождения
                <input type = "text"class="input" id="input">
                </th>
                <th>дата начала обучения
                <input type = "text"class="input" id="input">
                </th>
                <th>факультет
                <input type = "text"class="input" id="input">
                </th>
            </tr>
     </table><button class = "btn" id ="sendButton">отправить</button>
 </div>
 `;
}
CreateTable();

function otr() {
  let input = document.getElementById("input");
  let send = document.getElementById("sendButton");
  for (let i = 0; i < send.value; i++) {
    send[i].onclick = function () {};
  }

  if (input.value.length == 0) {
    alert("введите в сторчку значение");
  }
}
otr();
