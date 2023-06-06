const inputEl = document.getElementById("input-el")
const submitBtn = document.getElementById("submit-btn")
const listEl = document.getElementById("list")
const removeBtn = document.getElementById("removeBtn")
let list = []



submitBtn.addEventListener("click", function(){
    list.push(inputEl.value)
    inputEl.value = ""
    renderList()
})

function renderList(){
    let listItems = ""
    for (let i = 0; i<list.length; i++){
        listItems += `<p class="listitems" id="${[i]}">${list[i]}<button id="removeBtn" onclick="remove(${[i]})">X</button></p>`
    }
    listEl.innerHTML = listItems
}

function remove(item){
    list.splice(item, 1)
    console.log(list)
    renderList()
}