import { source } from "./source.js";

// default to desktop layout (no switching)
document.body.classList.add('layout-desktop');
// ensure desktop button appears active; mobile is intentionally disabled in markup
const desktopBtn = document.getElementById('desktop-mode');
if(desktopBtn) desktopBtn.classList.add('active');

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
    // store selected id and navigate
    localStorage.setItem("idOfSelected",vaule);
    window.location.href = 'wordDisplay.html';
}