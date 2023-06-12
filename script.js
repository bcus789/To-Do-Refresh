const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("list")
const submitBtn = document.getElementById("submit-btn")
const removeBtn = document.getElementById("removeBtn")
let localListItems = JSON.parse(localStorage.getItem("list"))
let myList = []

if (localListItems){
    myList = localListItems
    render(myList)
}

inputEl.addEventListener("click", function () {
    if (inputEl.value === "Please Enter a Task") {
        inputEl.value = ""
    }
})

submitBtn.addEventListener("click", function () {
    if (inputEl.value === "") {
        inputEl.value = "Please Enter a Task"
    } else if (inputEl.value === "Please Enter a Task") {
    } else {
        myList.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("list", JSON.stringify(myList))
        render(myList)
    }
})

inputEl.addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        e.preventDefault();
        submitBtn.click();
    }
})

function render(list) {
    let listItems = ""
    for (let i = 0; i < list.length; i++) {
        listItems += `<p class="listitems" id="${[i]}"><button id="removeBtn" onclick="remove(${[i]})">X</button>${list[i]}</p>`
    }
    listEl.innerHTML = listItems
}

function remove(item) {
    myList.splice(item, 1)
    localStorage.setItem("list", JSON.stringify(myList))
    render(myList)
}


// function complete(item) {
//     let striked = item.toString()
//     let strikedItem = document.getElementById(striked)
//     strikedItem.style.textDecoration = "line-through"
// }

