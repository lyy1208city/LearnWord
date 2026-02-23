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
    animeContainer.innerHTML = '';
    const anime = document.createElement("video");
    anime.width = 640;
    anime.height = 360;
    // hide native controls so it looks like an image
    anime.controls = false;
    anime.setAttribute('playsinline','');

    const animesrc = document.createElement("source");
    animesrc.src = animeURL || '';
    animesrc.type = "video/mp4";

    anime.appendChild(animesrc);
    animeContainer.appendChild(anime);

    // play button under the video
    const playBtn = document.createElement('button');
    playBtn.className = 'play-btn';
    playBtn.textContent = '播放動畫';
    playBtn.addEventListener('click', ()=>{
        if(anime.paused){
            anime.play();
            playBtn.textContent = '暫停動畫';
        } else {
            anime.pause();
            playBtn.textContent = '播放動畫';
        }
    });
    animeContainer.appendChild(playBtn);
}

function displaySould(id){
    const soundContainer = document.getElementById("displaySound-container");
    const item = source.find(it => it.id === id);
    let soundURL = item.sound;
    soundContainer.innerHTML = '';
    const sound = document.createElement('audio');
    sound.controls = false;
    const soundsrc = document.createElement("source");
    soundsrc.src = soundURL || '';
    soundsrc.type = "audio/mpeg";
    sound.appendChild(soundsrc);
    // hide native controls but keep element for playback
    sound.className = 'visually-hidden';
    soundContainer.appendChild(sound);

    const playAudioBtn = document.createElement('button');
    playAudioBtn.className = 'play-btn secondary';
    playAudioBtn.textContent = '播放讀音';
    playAudioBtn.addEventListener('click', ()=>{
        sound.currentTime = 0;
        sound.play();
    });
    // ensure the audio button appears below the animation control
    soundContainer.appendChild(playAudioBtn);
}

