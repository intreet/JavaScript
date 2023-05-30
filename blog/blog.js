function title(title) {
    let h2 = document.createElement("h2")
    h2.textContent = title
    return h2
}

let conteiner = document.querySelector("#osnova")
let name = title("страницы")
conteiner.append(name)

async function serch(id) {
    let response = await fetch(`https://gorest.co.in/public-api/posts?page=${id}`)
    let otr = response.json()
    console.log(otr)

    let conteiner = document.querySelector("#osnova")
    let p = otr
    conteiner.append(p)
}
serch(1)

let otisovka = document.querySelector("#otr")
for(let i = 0; i < 100; i++){
    let ser = serch()

}



