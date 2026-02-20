import { source } from "./source.js";

createButton()

function createButton(){
    const ButtonContainer = document.getElementById("displayButton-container");
    source.forEach(item => {
        const btn = document.createElement("button"); 
        btn.textContent = item.value;
        btn.addEventListener("click",() => {
            idOfButton(item.id)});
        ButtonContainer.appendChild(btn);
    })
}

function idOfButton(vaule){
    localStorage.clear("idOfSelected");
    console.log("Clear")
    localStorage.setItem("idOfSelected",vaule);
    console.log("Selectid " + vaule)
    window.location.href = 'wordDisplay.html';
}