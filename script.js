// --------- For Fvr8 songs ------------

$("#mark-fvr8").click(function() {
    if($("#mark-fvr8").html() == "favorite") {
        $("#mark-fvr8").html("favorite_border");
    }
    else {
        $("#mark-fvr8").html("favorite");
    }
});

// --------- Button Functionalities ------------



$("#forward30secs").click(function() {
    var currPositionOfSong = parseInt($("#songProgressBar").val());
    if (currPositionOfSong <= 70) {
        currPositionOfSong += 30;
    }
    else {
        currPositionOfSong = 100;
    }
    $("#songProgressBar").val(currPositionOfSong);
    console.log(currPositionOfSong);
});

$("#back30secs").click(function() {
    var currPositionOfSong = parseInt($("#songProgressBar").val());
    if (currPositionOfSong >= 30) {
        currPositionOfSong -= 30;
    }
    else {
        currPositionOfSong = 0;
    }
    $("#songProgressBar").val(currPositionOfSong);
    console.log(currPositionOfSong);
});

// ----------- Songs ---------

let songs = [
    {
        songId: '1',
        songName: "Agar Tum Saath Ho",
        artist: "Alka Yagnik and Arijit Singh",
        path: "Songs/Agar Tum Saath Ho.mp3",
        cover: "Songcover/agar tum saath ho.jpg"
    },
    {
        songId: '2',
        songName: "Let Me Down Slowly",
        artist: "Alec Benjamin",
        path: "Songs/Alec Benjamin - Let Me Down Slowly.mp3",
        cover: "Songcover/Let me down slowly.jpg"
    },
    {
        songId: '3',
        songName: "Dekhte Dekhte",
        artist: "Atif Aslam",
        path: "Songs/Atif Aslam - Dekhte Dekhte.mp3",
        cover: "Songcover/dekhte dekhte.jpg"
    },
    {
        songId: '4',
        songName: "Dynamite",
        artist: "BTS",
        path: "Songs/BTS - Dynamite.mp3",
        cover: "Songcover/dynamite.jpg"
    },
    {
        songId: '5',
        songName: "Beautiful People",
        artist: "Ed Sheeran ft. Khalid",
        path: "Songs/Ed Sheeran - Beautiful People feat Khalid.mp3",
        cover: "Songcover/Beautiful people.jpg"
    },
    {
        songId: '6',
        songName: "Love the way you lie",
        artist: "Eminem ft. Rihanna",
        path: "Songs/Eminem - Love the way you lie ft Rihanna.mp3",
        cover: "Songcover/love the way you lie.png"
    },
    {
        songId: '7',
        songName: "Take you Dancing",
        artist: "Jason Derulo",
        path: "Songs/Jason Derulo - Take You Dancing.mp3",
        cover: "Songcover/Take you dancing.jpg"
    },
    {
        songId: '8',
        songName: "Kho Gaye Hum Kahan",
        artist: "Jasleen Royal",
        path: "Songs/KHO GAYE HUM KAHAN  -  JASLEEN ROYAL.mp3",
        cover: "Songcover/kho gaye hum kahan.jpg"
    },
    {
        songId: '9',
        songName: "Lean On",
        artist: "Major Lazer, DJ Snake ft. MØ",
        path: "Songs/Major Lazer  DJ Snake  Lean On feat MØ.mp3",
        cover: "Songcover/lean on.jpg"
    },
    {
        songId: '10',
        songName: "Moh Moh ke Dhaage",
        artist: "Monali Thakur",
        path: "Songs/Moh Moh Ke Dhaage - Papon Monali  Anu Malik.mp3",
        cover: "Songcover/moh moh ke dhaage.jpg"
    },
    {
        songId: '11',
        songName: "Namo Namo",
        artist: "Amit Trivedi and Amitabh B",
        path: "Songs/Namo Namo - Amit Trivedi  Amitabh B.mp3",
        cover: "Songcover/namo namo.jpg"
    },
    {
        songId: '12',
        songName: "Achyutam Keshavam",
        artist: "Shreya Ghoshal",
        path: "Songs/Shreya Ghoshal - Achyutam Keshavam.mp3",
        cover: "Songcover/achyutam keshavam.jpg"
    },
    {
        songId: '13',
        songName: "Tu Hi Yaar Mera",
        artist: "Arijit Singh, Neka Kakkar and Rochak K",
        path: "Songs/Tu Hi Yaar Mera - Ananya P  RochakArijit SNeha K.mp3",
        cover: "Songcover/tu hi yaar mera.jpg"
    }
]

// ----------------------------------
// main work starts from here
// ----------------------------------

// variables

let currSongIndex = 0;
let audioElement = new Audio("Songs/Ed Sheeran - Beautiful People feat Khalid.mp3");
let masterPlay = $("#pause-play-btn");
let myProgressBar = $("#songProgressBar");

// event listeners

// handle play-pause

masterPlay.click(function() {
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        $("#pause-play-btn").html("pause");
        $("#topGif").css("opacity", 1);
        $("#bottomGif").css("opacity", 1);
    } 
    else {
        audioElement.pause();
        $("#pause-play-btn").html("play_arrow");
        $("#topGif").css("opacity", 0);
        $("#bottomGif").css("opacity", 0);
    }
});

function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}

// timeupdate
audioElement.ontimeupdate = function() {

    let currSongTimeMins = Math.floor(Math.round(audioElement.currentTime)/60);
    let currSongTimeSecs = Math.round(audioElement.currentTime)%60;
    let currSongDurMins = Math.floor(Math.round(audioElement.duration)/60);
    let currSongDurSecs = Math.round(audioElement.duration)%60;

    $("#currSongTime").html(str_pad_left(currSongTimeMins,'0',2) + ':' + str_pad_left(currSongTimeSecs,'0',2));
    $("#currSongDuration").html(str_pad_left(currSongDurMins,'0',2) + ':' + str_pad_left(currSongDurSecs,'0',2));

    let currProgressBar = parseInt((Math.round(audioElement.currentTime)/Math.round(audioElement.duration)) * 100);
    myProgressBar.val(currProgressBar);
};

myProgressBar.on('input', function() {
    audioElement.currentTime = $("#songProgressBar").val() * audioElement.duration / 100;
});

// setting songs
songItems = Array.from(document.getElementsByClassName("songTiles"));       // making it array so that it can be traversed

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].cover;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("songId")[0].innerText = songs[i].songId;
});

Array.from($(".songTiles")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        Array.from($(".song-play-buttons")).forEach((ele)=>{
            ele.innerText = "play_circle_outline";
        })
        e.target.innerText = "pause_circle_outline";

        currSongIndex = parseInt(element.children[2].innerText);
        audioElement.src = songs[currSongIndex-1].path;
        audioElement.play();
        $("#pause-play-btn").html("pause");
        $("#topGif").css("opacity", 1);
        $("#bottomGif").css("opacity", 1);

        $("#playingSongCover")[0].src = songs[currSongIndex-1].cover;
    })
})

// --------- For Volume Bar ------------

$("#volumeBar").on('input', function() {
    
    var currVolume = $("#volumeBar").val();
    // console.log(currVolume);

    audioElement.volume = currVolume/100;

    $("#volume-num").html(currVolume);

    var volIcon = $("#volume-icon");

    if (currVolume==0) {
        volIcon.html("volume_off");
    }
    else if (currVolume<33) {
        volIcon.html("volume_mute");
    }
    else if (currVolume<67) {
        volIcon.html("volume_down");
    }
    else {
        volIcon.html("volume_up");
    }
});
