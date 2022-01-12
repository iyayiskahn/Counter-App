let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
let count = 0

function increment() {
    count = count + 1 
    countEl.textContent = count
}

function save() {
    
    let countStr = count + " - " 
    saveEL.textContent += countStr
    countEl.textContent = 0
    count = 0
}
// 


// NB: make sure to not delete the existing content of the paragraph


//let welcomeEL = document.getElementById("welcome-el")

//let myName = "Davidson"

//let greeting = "Welcome back "

//welcomeEL.innerText = greeting + myName

//Add an emoji to the end !
//welcomeEL.innerText = welcomeEL.innerText + "👋"