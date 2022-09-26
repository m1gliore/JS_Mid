function generateSentence(desc, arr) {
    let baseString = `${arr.length} ${desc}: `
    const lastIndex = arr.length - 1
    const penultIndex = arr.length - 2
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i] + "."
        } else if (i === penultIndex) {
            baseString += arr[i] + " и "
        } else {
            baseString += arr[i] + ", "
        }
    }
    return baseString
}

sentence = generateSentence("самых высоких гор мира", ["Эверест", "Чогори", "Канченджанга", "Лхоцзе", "Макалу"])

console.log(sentence)
