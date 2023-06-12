const inputEl = document.getElementById("input-el")
const submitBtn = document.getElementById("submit-btn")
const listEl = document.getElementById("list")
const removeBtn = document.getElementById("removeBtn")
let list = []
let localListItems = JSON.parse(localStorage.getItem("list"))

if (localListItems){
    list = localListItems
    renderList()
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
        list.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("list", JSON.stringify(list))
        renderList()
    }
})

inputEl.addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        e.preventDefault();
        submitBtn.click();
    }
})

function renderList() {
    let listItems = ""
    for (let i = 0; i < list.length; i++) {
        listItems += `<p class="listitems" id="${[i]}"><button id="removeBtn" onclick="remove(${[i]})">X</button>${list[i]}</p>`
    }
    listEl.innerHTML = listItems
}

function remove(item) {
    list.splice(item, 1)
    localStorage.setItem("list", JSON.stringify(list))
    renderList()
}

// function complete(item) {
//     let striked = item.toString()
//     let strikedItem = document.getElementById(striked)
//     strikedItem.style.textDecoration = "line-through"
// }

