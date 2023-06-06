const inputEl = document.getElementById("input-el")
const submitBtn = document.getElementById("submit-btn")
const listEl = document.getElementById("list")
const removeBtn = document.getElementById("removeBtn")
const paragraph = document.getElementById("p")
let list = []



submitBtn.addEventListener("click", function(){
    if (inputEl.value === ""){
        inputEl.value = "Please Enter a Task"
    } else if(inputEl.value === "Please Enter a Task"){
    
    } else {
    list.push(inputEl.value)
    inputEl.value = ""
    renderList()
}})

function renderList(){
    let listItems = ""
    for (let i = 0; i<list.length; i++){
        listItems += `<p class="listitems" id="${[i]}"><button id="removeBtn" onclick="remove(${[i]})">X</button>${list[i]}</p>`
    }
    listEl.innerHTML = listItems
}

function remove(item){
    list.splice(item, 1)
    console.log(list)
    renderList()
}

paragraph.addEventListener("click", function(){
    paragraph.style.textDecoration = "line-through"
})