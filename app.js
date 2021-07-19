const musicContainer = document.getElementById('music-container')

const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

const audio = document.getElementById('audio')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
const title = document.getElementById('title')
const cover = document.getElementById('cover')

//Song Titles
const songs = ['gospel','search','nazare'];

// Keep track of song
let songIndex = 0;

//Load song details into DOM
loadSong(songs[songIndex]);

//Update song details
function loadSong(song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `img/${song}.jpg`;

}