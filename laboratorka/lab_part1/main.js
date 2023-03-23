// alert("привет мир")

let users = [
    {name: "roma", login: "intreet120986@gmail.com", password: "123098"},
    {name: "ivan", login: "popoivan@gmail.com", password: "1234567890"},
    {name: "mikita", login: "nikita178@gmail.com", password: "oleg12"}
]

let loginCheack = prompt("введите логин")
let passwordCheack = prompt("введите пароль")


    for(let i = 0; i < users.length; i++){
        if (loginCheack == users[i].login && passwordCheack == users[i].password) {
            alert("здравствуйте" +" " + users[i].name) 
            break
        }else {
            alert("такого пользователя нет")
            break
        }
    }