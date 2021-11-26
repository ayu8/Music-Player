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
