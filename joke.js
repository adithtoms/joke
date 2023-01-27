const jokec = document.querySelector('#joke')
const btn = document.querySelector('#btn')
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getjoke=()=> { fetch(url).then(data => data.json()).then(item => { jokec.textContent = `${item.joke}`})}

btn.addEventListener("click",getjoke)

getjoke()
