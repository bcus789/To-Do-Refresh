const inputEl = document.getElementById("input-el")
const submitBtn = document.getElementById("submit-btn")
const listEl = document.getElementById("list")
const removeBtn = document.getElementById("removeBtn")
let list = []


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
        renderList()
    }
})

function renderList() {
    let listItems = ""
    for (let i = 0; i < list.length; i++) {
        listItems += `<p class="listitems" id="${[i]}"><button id="removeBtn" onclick="remove(${[i]})">X</button><button id="completeBtn" onclick="complete(${[i]})">Done</button>${list[i]}</p>`
    }
    listEl.innerHTML = listItems
}

function remove(item) {
    list.splice(item, 1)
    renderList()
}

function complete(item) {
    let striked = item.toString()
    let strikedItem = document.getElementById(striked)
    strikedItem.style.textDecoration = "line-through"
}

