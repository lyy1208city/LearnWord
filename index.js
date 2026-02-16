import { source } from "./source.js";



createbutton();

function createbutton(){
    const ButtonContainer = document.getElementById("displayButton-container");
    source.forEach(item => {
        const btn = document.createElement("button"); 
        btn.textContent = item.value;
        ButtonContainer.appendChild(btn);
    })
}

function idofbutton(vaule){

}