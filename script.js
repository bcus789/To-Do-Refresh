const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("list")
const submitBtn = document.getElementById("submit-btn")
const localListItems = JSON.parse(localStorage.getItem("list"))


checkStorage()

inputEl.addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        e.preventDefault();
        submitBtn.click();
    }
})

function checkStorage(){
    if (localStorage){
        listEl.innerHTML = localListItems
        let deleteButton = document.querySelectorAll(".delete-button")
        deleteButton.forEach((button) => button.addEventListener('click', deleteItem))
        let completeButton = document.querySelectorAll(".complete-button")
        completeButton.forEach((button) => button.addEventListener('click', completeItem))
        localStorage.setItem("list", JSON.stringify(listEl.innerHTML))
    }
}

submitBtn.addEventListener("click", checkEmpty)

function checkEmpty() {
    if (inputEl.value === "") {
        alert("Please enter a task")
    } else {
        addToList()
    }
}

function addToList() {
    let newItem = document.createElement("p")
    let deleteBtn = document.createElement("button")
    let completeBtn = document.createElement("button")
    completeBtn.setAttribute("class", "complete-button")
    deleteBtn.setAttribute("class", "delete-button")
    deleteBtn.textContent = "X"
    completeBtn.setAttribute("class", "complete-button")
    completeBtn.textContent = "Done"
    newItem.textContent = inputEl.value
    newItem.prepend(completeBtn)
    newItem.prepend(deleteBtn)
    listEl.appendChild(newItem)
    let deleteButton = document.querySelectorAll(".delete-button")
    deleteButton.forEach((button) => button.addEventListener('click', deleteItem))
    let completeButton = document.querySelectorAll(".complete-button")
    completeButton.forEach((button) => button.addEventListener('click', completeItem))
    localStorage.setItem("list", JSON.stringify(listEl.innerHTML))
    inputEl.value = ""
}



function deleteItem(e) {
    e.currentTarget.parentElement.remove()
    localStorage.setItem("list", JSON.stringify(listEl.innerHTML))
}

function completeItem(e) {
    e.currentTarget.parentElement.style.textDecoration = "line-through"
    localStorage.setItem("list", JSON.stringify(listEl.innerHTML))
}


