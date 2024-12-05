let inputBox = document.getElementById('inputBox');
let addBtn = document.getElementById('addBtn');
let container = document.getElementById('container');

addBtn.addEventListener('click', function(){
    let nl = document.createElement("li");
    //nl.textContent = inputBox.value 
    //nl.textContent = inputBox.value + "<button onClick='deleteList(event)'"
    nl.innerHTML = inputBox.value + "  "+ "<button onClick ='deleteList(event)'>DELETE</button>"
    container.append(nl)
})

function deleteList(event){
    event.target.parentElement.remove()
}