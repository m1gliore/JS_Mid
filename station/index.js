let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count++
    countEl.innerHTML = count
}

function save() {
    let countStr = count + " - "
    saveEl.innerHTML += countStr
    countEl.innerHTML = count = 0
}
