let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += fruit[i]
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += fruit[i]
        }
    }
}

sortFruit()

alert(0.32 * 0.22 * 0.75)