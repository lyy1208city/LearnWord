import { source } from "./source.js";

createButton();

function createButton(){
    const ButtonContainer = document.getElementById("displayButton-container");
    ButtonContainer.innerHTML = '';
    source.forEach(item => {
        const btn = document.createElement("button"); 
        btn.className = 'word-tile';
        btn.textContent = item.value;
        btn.addEventListener("click",() => {
            idOfButton(item.id)
        });
        ButtonContainer.appendChild(btn);
    })
}

function idOfButton(vaule){
    localStorage.setItem("idOfSelected",vaule);
    window.location.href = 'wordDisplay.html';
}