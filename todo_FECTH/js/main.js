function create_title(title) {
  let names = document.querySelector("#to_do_name");
  names.innerHTML = title;
  return names;
}
function create_form() {
  let start = document.querySelector("#start");

  let conteiner = document.createElement("div");
  let h2 = document.createElement("h2");
  let todo_line = document.createElement("div");
  let input = document.createElement("input");
  let button = document.createElement("button");
  let task = document.createElement("div");

  conteiner.classList.add("con/teiner_todo");
  h2.classList.add("to_do_name");
  input.classList.add("form");
  button.classList.add("save_button");
  task.classList.add("task");

  button.innerHTML = "добавить";

  h2.id = "to_do_name";
  todo_line.id = "todo_line";
  input.id = "placeholder";
  button.id = "saved_button";

  todo_line.append(input, button, task);
  conteiner.append(h2, todo_line);
  start.append(conteiner);
}

async function create_task() {
  let placeholder = document.querySelector("#placeholder");
  let task = document.querySelector(".task");
  if (placeholder.value.length == 0) {
    alert("пожалуйста введите вашу задачу");
  } else {
    task.innerHTML += ` 
                <div class="tasks"> 
                    <span id="name_task"> ${placeholder.value} </span>
                    <button type="button" id="button_Delete" class="delete">удалить</button>
                    <button type="button" id="complite_button" class="complite">завершенно</button>
                </div>
                `;

    let delete_task = document.querySelectorAll("#button_Delete");
    let complite_task = document.querySelectorAll("#complite_button");

    placeholder.value = "";

    for (let i = 0; i < delete_task.length; i++) {
      delete_task[i].onclick = function () {
        if (confirm("вы действительно хотите удалить")) {
          this.parentNode.remove();
        }
      };
    }
    for (let i = 0; i < complite_task.length; i++) {
      complite_task[i].onclick = function () {
        this.parentNode.style.backgroundColor = "lime";
      };
    }
  }


  let url = "http://localhost:3000/api/todos"
  
  
  let mas = 
    {
      owner: "owner",
      name: placeholder
    }

  let response = await fetch(url, {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(mas)
  })

  let json = await response.json()
  console.log(json);

  


  
      
        
       
}




function taskin() {
  let save_button = document.querySelector("#saved_button");
  save_button.onclick = create_task;
}

function task_saved() {
  let id = Element.id;
  let mom = document.querySelector("#mom_list");
  let ded = document.querySelector("#ded_list");
  if ((id = mom)) {
    create_title("мамин список");
    taskin();
  } else if ((id = ded)) {
    create_title("папин список");
    taskin();
  } else {
    create_title("мой список");
    taskin();
  }
}
async function status1() {
  let status_feth = await response.status
  console.log(status_feth)
}


create_form();
task_saved(); 
status1()
