"use Strict"

let save_button = document.querySelector('#saved_button')
let placeholder = document.querySelector('#placeholder')
let task = document.querySelector('.task')

// alert("hello world")

function button_click() {
    if (placeholder.value.length == 0) {
        alert("пожалуйста введите вашу задачу")
    }else {
        task.innerHTML += ` 
            <div class="tasks">
                <span id="name_task">
                    ${placeholder.value}
                </span>
                <button type="button" id="button_Delete" class="delete">удалить</button>
            </div>
            `
            let delete_task = document.querySelectorAll('#button_Delete'); 
            for (let i = 0; i < delete_task.length; i++) {
                delete_task[i].onclick = function() {
                    this.parentNode.remove();
                }
            }
        }
}
function main() {
    save_button.onclick = button_click;
}
main();
