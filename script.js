console.log("Welcome To Shamzz");

let songindex = 0;
let audioelement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let msatersongname = document.getElementById('msatersongname');
let songsItems = Array.from(document.getElementsByClassName("songsItem"));

let songs = [

    { songname: "Maan Meri Jaan", filepath: "1.mp3", coverpath: " 1.jpg" },
    { songname: "Final Thoughts", filepath: "2.mp3", coverpath: " 2.jpg" },
    { songname: "Hazur", filepath: "3.mp3", coverpath: " 3.jpeg" },
    { songname: "Drip", filepath: "4.mp3", coverpath: " 4.jpeg" },
    { songname: "CopyRight", filepath: "5.mp3", coverpath: " 5.jpg" },
    { songname: "All Ace", filepath: "6.mp3", coverpath: " 6.jpg" },
    { songname: "Slow REmix", filepath: "7.mp3", coverpath: " 7.jpg" },
    { songname: "Let Me Love You", filepath: "8.mp3", coverpath: " 8.jpg" },

]
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        let songItemPlay = document.getElementById(`${songindex}`)
        console.log(songItemPlay)
        songItemPlay.classList.remove('fa-circle-play');
        songItemPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        let songItemPlay = document.getElementById(`${songindex}`)
        console.log(songItemPlay)
        songItemPlay.classList.remove('fa-circle-pause');
        songItemPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

songsItems.forEach((element, i) => {
    // console.log(element, i);
    element[0].getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})

audioelement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seek bar
    progess = parseInt((audioelement.currentTime / audioelement.duration) * 100)
    // console.log(progess);
    myprogressbar.value = progess;
}
)
myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
})
const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        console.log("main button hit")
        console.log(e.target);
        console.log(e.target.classList[3]);

        if(e.target.classList[3] === 'fa-circle-play'){
            console.log("play");
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
        }
        else if(e.target.classList[3] == 'fa-circle-pause'){
            console.log("pause");
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
        }
        songindex = parseInt(e.target.id);
        // e.target.classList.remove('fa-circle-play');
        // e.target.classList.add('fa-circle-pause');
        audioelement.src = `${songindex}.mp3`;
        msatersongname.innerText = songs[songindex - 1].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    })

})
document.getElementById('forward').addEventListener('click', () => {
    if (songindex >= 7) {
        songindex = 0
    }
    else {
        songindex += 1;
    }
    console.log(songindex);
    audioelement.src = `${songindex}.mp3`;
    console.log(songs);
    console.log(songs[songindex].songname);

    msatersongname.innerText = songs[songindex - 1].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    let songItemPlay = document.getElementById(`${songindex - 1}`)
    console.log(songItemPlay);
    songItemPlay.classList.remove('fa-circle-pause');
    songItemPlay.classList.add('fa-circle-play');
    let songItemPlay1 = document.getElementById(`${songindex}`)
    console.log(songItemPlay);
    songItemPlay1.classList.remove('fa-circle-play');
    songItemPlay1.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 7
    }
    else {
        songindex -= 1;
    }
    console.log(songindex);
    audioelement.src = `${songindex}.mp3`;
    msatersongname.innerText = songs[songindex - 1].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    let songItemPlay1 = document.getElementById(`${songindex + 1}`)
    console.log(songItemPlay1);
    songItemPlay1.classList.remove('fa-circle-pause');
    songItemPlay1.classList.add('fa-circle-play');

    let songItemPlay = document.getElementById(`${songindex}`)
    console.log(songItemPlay);
    songItemPlay.classList.remove('fa-circle-play');
    songItemPlay.classList.add('fa-circle-pause');

})

