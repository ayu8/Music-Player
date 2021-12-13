// --------- For Progress Bar ( Mouse Hold Event ) ------------

$("#songProgressBar").mouseup(function() {
    $("#songProgressBar").css("cursor", "grab");
});

$("#songProgressBar").mousedown(function() {
    $("#songProgressBar").css("cursor", "grabbing");
});

// --------- For Volume Bar ------------

$("#volumeBar").on('input', function() {
    
    var currVolume = $("#volumeBar").val();
    console.log(currVolume);

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

$("#pause-play-btn").click(function() {
    if($("#pause-play-btn").html() == "play_arrow") {
        $("#pause-play-btn").html("pause");
    }
    else {
        $("#pause-play-btn").html("play_arrow");
    }
});

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
