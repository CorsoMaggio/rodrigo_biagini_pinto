// Milestone 1 
// Funzione 1 add alt click del button del btn add, la task alla li-to do
function addToList(){
    let inputToAdd = document.getElementById("inputText");
    let inputValue = inputToAdd.value;
    let liElement = document.createElement("li");
    liElement.textContent = inputValue;
    console.log(inputValue);
    let btncheck = document.createElement("button");

    let ulElement = document.querySelector(".to-do-list");
    ulElement.appendChild(liElement);
}
let btnAdd = document.querySelector(".btn-add");
btnAdd.addEventListener("click", addToList);

console.log("ok");





// Funzione 2 completed al click del btn click, la task passa alla li 
// completed 







// Funzione 3 REMOVE al click dell btn remove, si remove la task 