import { source } from "./source.js";

createToggleBar();
createButton();

// initialize layout mode from localStorage (layout-mobile | layout-desktop)
function createToggleBar(){
    const mobileBtn = document.getElementById('mobile-mode');
    const desktopBtn = document.getElementById('desktop-mode');
    const saved = localStorage.getItem('layoutMode') || 'layout-desktop';
    applyLayout(saved);

    mobileBtn.addEventListener('click', ()=> { applyLayout('layout-mobile'); localStorage.setItem('layoutMode','layout-mobile'); });
    desktopBtn.addEventListener('click', ()=> { applyLayout('layout-desktop'); localStorage.setItem('layoutMode','layout-desktop'); });
}

function applyLayout(mode){
    document.body.classList.remove('layout-mobile','layout-desktop');
    document.body.classList.add(mode);
    const mobileBtn = document.getElementById('mobile-mode');
    const desktopBtn = document.getElementById('desktop-mode');
    if(mode === 'layout-mobile'){
        mobileBtn.classList.add('active'); desktopBtn.classList.remove('active');
    } else {
        desktopBtn.classList.add('active'); mobileBtn.classList.remove('active');
    }
}

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