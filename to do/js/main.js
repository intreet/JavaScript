"use Strict"
    let save_button = document.querySelector('#saved_button')
    let placeholder = document.querySelector('#placeholder')
    let task = document.querySelector('.task')

// function create_title(title) { 
//     let names = document.querySelector('#to_do_name')
//     names.innerHTML = title
//     return names
// }

function button_click() {
    
    if (placeholder.value.length == 0) {
        alert("пожалуйста введите вашу задачу")
    }else {
        task.innerHTML += ` 
            <div class="tasks"> 
                <span id="name_task"> ${placeholder.value} </span>
                <button type="button" id="button_Delete" class="delete">удалить</button>
                <button type="button" id="complite_button" class="complite">завершенно</button>
            </div>
            `
            let delete_task = document.querySelectorAll('#button_Delete')
            let complite_task = document.querySelectorAll('#complite_button')
            
            for (let i = 0; i < delete_task.length; i++) {
                delete_task[i].onclick = function() {
                    this.parentNode.remove()
                }
                
                
            }
            for (let i = 0; i < complite_task.length; i++) {
                complite_task[i].onclick = function() {
                    this.parentNode.style.backgroundColor = "green"
                }
            }
            
           
    }
    
      
}

function taskin() {
    save_button.onclick = button_click;
}

taskin()
