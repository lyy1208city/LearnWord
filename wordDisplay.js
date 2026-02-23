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
    anime.preload = 'metadata';
    anime.style.objectFit = 'contain';
    anime.style.maxHeight = '60vh';

    // if there is a video URL, attach source; otherwise show a generated poster
    if(animeURL){
        const animesrc = document.createElement("source");
        animesrc.src = animeURL;
        animesrc.type = "video/mp4";
        anime.appendChild(animesrc);
    } else {
        // generate a simple SVG poster with the character
        anime.poster = createPosterDataURL(item.value || '');
    }

    animeContainer.appendChild(anime);

    // play button under the video
    const playBtn = document.createElement('button');
    playBtn.className = 'play-btn';
    playBtn.textContent = '播放動畫';
    playBtn.addEventListener('click', ()=>{
        if(!animeURL) return;
        if(anime.paused){
            anime.play();
            playBtn.textContent = '暫停動畫';
        } else {
            anime.pause();
            playBtn.textContent = '播放動畫';
        }
    });
    if(!animeURL){
        playBtn.disabled = true;
        playBtn.textContent = '沒有動畫';
        playBtn.style.opacity = '0.7';
        playBtn.style.cursor = 'default';
    }
    animeContainer.appendChild(playBtn);
}

function createPosterDataURL(text){
    const char = (text||'').replace(/&/g,'%26').replace(/#/g,'%23');
    const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns='http://www.w3.org/2000/svg' width='1280' height='720' viewBox='0 0 1280 720'><rect width='100%' height='100%' fill='%23ffffff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Noto Sans TC, Microsoft JhengHei, sans-serif' font-size='300' fill='%23e2e8f0' opacity='0.9'>${text}</text></svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function displaySould(id){
    const soundContainer = document.getElementById("displaySound-container");
    const item = source.find(it => it.id === id);
    let soundURL = item.sound;
    soundContainer.innerHTML = '';
    const sound = document.createElement('audio');
    sound.controls = false;
    const soundsrc = document.createElement("source");
    soundsrc.src = soundURL;
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

