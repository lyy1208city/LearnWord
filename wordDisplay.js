import { source } from "./source.js";

let id = getIdOfSelected();
console.log("The current id " + id);
displayAnime(id);
displaySould(id);

function getIdOfSelected(){
    return Number(localStorage.getItem("idOfSelected"));
}

function displayAnime(id){
    const animeContainer = document.getElementById("displayAnime-container");
    const item = source.find(it => it.id === id);
    let animeURL = item.animation;

    const anime = document.createElement("video");
    anime.width = "320";
    anime.height = "240";
    anime.controls = true;

    const animesrc = document.createElement("source");
    animesrc.src = animeURL; 
    animesrc.type = "video/mp4";

    animeContainer.appendChild(anime);
    anime.appendChild(animesrc);
}

function displaySould(id){
    const soundContainer = document.getElementById("displaySound-container");
    const item = source.find(it => it.id === id);
    let soundURL = item.sound;

    const sound = document.createElement("audio");
    sound.controls = true;

    const soundsrc = document.createElement("source");
    soundsrc.src = soundURL; 
    soundsrc.type = "audio/mpeg";

    soundContainer.appendChild(sound);
    sound.appendChild(soundsrc);
}

