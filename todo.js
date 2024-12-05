let createElement = document.createElement('h1');
createElement.textContent = "WELCOME"

let container = document.getElementById("container");
container.append(createElement)

let btn = document.getElementById('btn');

btn.addEventListener('click', function()
    {
       let newhdg = document.createElement('p');
       newhdg.textContent = "Have a Nice Day"
       //container.append(newhdg)
       container.prepend(createElement)
    }
)
let del = document.getElementById('one');
//del.remove()
let deleteBtn = document.getElementById('delete')
deleteBtn.addEventListener('click', function()
{
    del.remove()
})

function deleteElement(event){
    //console.log(event.target)
    console.log(event.target.remove());
}