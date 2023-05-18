let students = [
  {
    firstName: "Иван",
    lastName: "Клаутов",
    middleName: "Вилсонович",
    birthdate: "10-05-1945",
    startYear: 2001,
    facultet: "Математический",
  },

  {
    firstName: "Cэнди",
    lastName: "Чипс",
    middleName: "Агерисович",
    birthdate: "11-09-2001",
    startYear: 2002,
    facultet: "Фуфлологический",
  },
  {
    firstName: "Никита",
    lastName: "Петлюра",
    middleName: "Ариевич",
    birthdate: "12-03-1999",
    startYear: 2003,
    facultet: "Асинизаторный",
  },
];

function openAddStudentModal() {

  let modal = document.querySelector("#add-student-modal");
  modal.style.display = "block";
}

function closeAddStudentModal() {

  let modal = document.querySelector("#add-student-modal");
  modal.style.display = "none";
}

let addStudentButton = document.querySelector("#add-student-button");
addStudentButton.addEventListener("click", openAddStudentModal);

let cancelButton = document.querySelector(
  "#add-student-form button[type=button]"
);
cancelButton.addEventListener("click", closeAddStudentModal);

let addStudentForm = document.querySelector("#add-student-form");
addStudentForm.addEventListener("submit", addStudent);

function renderTable() {
  let tbody = document.querySelector("#students-table tbody");
  tbody.innerHTML = "";

  students.forEach(function (student) {
    let tr = document.createElement("tr");

    let tdFirstName = document.createElement("td");
    tdFirstName.textContent = student.firstName;
    tr.appendChild(tdFirstName);

    let tdLastName = document.createElement("td");
    tdLastName.textContent = student.lastName;
    tr.appendChild(tdLastName);

    let tdMiddleName = document.createElement("td");
    tdMiddleName.textContent = student.middleName;
    tr.appendChild(tdMiddleName);

    let tdBirthdate = document.createElement("td");
    tdBirthdate.textContent = student.birthdate;
    tr.appendChild(tdBirthdate);

    let tdStartYear = document.createElement("td");
    tdStartYear.textContent = student.startYear;
    tr.appendChild(tdStartYear);

    let tdFacultet = document.createElement("td");
    tdFacultet.textContent = student.facultet;
    tr.appendChild(tdFacultet);

    tbody.appendChild(tr);
  });

  let thList = document.querySelectorAll("th[data-sortby]");

  thList.forEach(function (th) {
    th.addEventListener("click", function () {
      let sortBy = th.getAttribute("data-sortby");
      let sortDir = th.getAttribute("data-sortdir");
      let sortFn;

      if (sortDir === "asc") {
        sortDir = "desc";
        sortFn = function (a, b) {
          if (a[sortBy] > b[sortBy]) return -1;
          if (a[sortBy] < b[sortBy]) return 1;
          return 0;
        };
      } else {
        sortDir = "asc";
        sortFn = function (a, b) {
          if (a[sortBy] < b[sortBy]) return -1;
          if (a[sortBy] > b[sortBy]) return 1;
          return 0;
        };
      }

      students.sort(sortFn);
      renderTable();

      th.setAttribute("data-sortdir", sortDir);
    });
  });
}

function addStudent(event) {
  event.preventDefault();

  let firstName = document.querySelector("#first-name").value.trim();
  let lastName = document.querySelector("#last-name").value.trim();
  let middleName = document.querySelector("#middle-name").value.trim();
  let birthdate = document.querySelector("#birthdate").value.trim();
  let startYear = document.querySelector("#start-year").value.trim();
  let facultet = document.querySelector("#facultet").value.trim();

  if (!firstName || !lastName || !middleName || !birthdate || !startYear || !facultet) {
    alert("Заполните все данные о студенте!");
    return;
  }

  students.push({
    firstName: firstName,
    lastName: lastName,
    middleName: middleName,
    birthdate: birthdate,
    startYear: startYear,
    facultet: facultet,
  });

  renderTable();

  document.querySelector("#add-student-form").reset();
}

document
  .querySelector("#add-student-form")
  .addEventListener("submit", addStudent);

renderTable();