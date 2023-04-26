const Body = document.body;
let trHead = document.getElementById("trHead");
let tBody = document.getElementById("tbody");

let studbecker = [
    {
        name: "Борис",
        surname: "Генадевич",
        lastName: "Андропов",
        birthDate:  "",
        studStart: "",
        studEnd: "",
        course: "Программист"   
    },
    {
        name: "Кирил",
        surname: "Максимович",
        lastName: "Алёхин",
        birthDate: "",
        studStart: "",
        studEnd: "",
        course: "сисадмин"   
    },
    {
        name: "Влад",
        surname: "Владович",
        lastName: "Владов",
        birthDate: "",
        studStart: "",
        studEnd: "",
        course: "Програмист"   
    },
]



function createTd(tableEl, text) {
    let td = document.createElement("td");
    td.append(text);
    tableEl.append(td);
}

function list_create(obj = {}) {
    let tr = document.createElement("tr");
    tBody.append(tr);
    createTd(tr, obj.surname);
    createTd(tr, obj.name);
    createTd(tr, obj.lastName);
    createTd(tr, obj.birthDate);
    createTd(tr, obj.studStart + "-" + obj.studEnd);
    createTd(tr, obj.course);
}

function main() {
    for (let i = 0; i < studbecker.length; i++) {
        list_create(studbecker[i]);
    }
}
main();