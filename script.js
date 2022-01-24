// ----------- Songs ---------

let songs = [
    {
        songId: '1',
        songName: "A Thousand Years",
        artist: "Christina Perri",
        path: "Songs/A Thousand Years - Christina Perri.webm",
        cover: "Songcover/A thousand years.jpg",
        songLength: "04:49"
    },
    {
        songId: '2',
        songName: "Achyutam Keshavam",
        artist: "Shreya Ghoshal",
        path: "Songs/Shreya Ghoshal - Achyutam Keshavam.mp3",
        cover: "Songcover/achyutam keshavam.jpg",
        songLength: "04:37"
    },
    {
        songId: '3',
        songName: "Agar Tum Mil Jao (Female)",
        artist: "Shreya Ghoshal",
        path: "Songs/Agar Tum Mil Jaao - Shreya Ghoshal.mp3",
        cover: "Songcover/Agar tum mil jao.jpg",
        songLength: "06:04"
    },
    {
        songId: '4',
        songName: "Agar Tum Saath Ho",
        artist: "Alka Yagnik, Arijit Singh",
        path: "Songs/Agar Tum Saath Ho.mp3",
        cover: "Songcover/agar tum saath ho.jpg",
        songLength: "05:41"
    },
    {
        songId: '5',
        songName: "Ambarsariya",
        artist: "Sona Mohapatra",
        path: "Songs/Ambarsariya - Sona Mohapatra.mp3",
        cover: "Songcover/Ambarsariya.jpg",
        songLength: "02:28"
    },
    {
        songId: '6',
        songName: "At My Worst",
        artist: "Pink Sweat$",
        path: "Songs/Pink Sweat - At My Worst.mp3",
        cover: "Songcover/At my worst.jpg",
        songLength: "02:49"
    },
    {
        songId: '7',
        songName: "Attention",
        artist: "Charlie Puth",
        path: "Songs/Charlie Puth - Attention.mp3",
        cover: "Songcover/Attention.jpg",
        songLength: "03:32"
    },
    {
        songId: '8',
        songName: "Baarish",
        artist: "Ash King, Shashaa T.",
        path: "Songs/Baarish - Ash King  Shashaa Tirupati.mp3",
        cover: "Songcover/Baarish.jpg",
        songLength: "04:46"
    },
    {
        songId: '9',
        songName: "Bawara Mann",
        artist: "Jubin Nautiyal, Neeti Mohan",
        path: "Songs/Bawara Mann - Jubin Nautiyal  Neeti Mohan.mp3",
        cover: "Songcover/Bawara Mann.jpg",
        songLength: "03:36"
    },
    {
        songId: '10',
        songName: "Beautiful People (ft. Khalid)",
        artist: "Ed Sheeran, Khalid",
        path: "Songs/Ed Sheeran - Beautiful People feat Khalid.mp3",
        cover: "Songcover/Beautiful people.jpg",
        songLength: "03:18"
    },
    {
        songId: '11',
        songName: "Believer",
        artist: "Imagine Dragons",
        path: "Songs/Imagine Dragons - Believer.mp3",
        cover: "Songcover/Believer.jpg",
        songLength: "03:23"
    },
    {
        songId: '12',
        songName: "Blank Space",
        artist: "Taylor Swift",
        path: "Songs/Taylor Swift - Blank Space.mp3",
        cover: "Songcover/Blank Space.jpg",
        songLength: "04:33"
    },
    {
        songId: '13',
        songName: "Blinding Lights",
        artist: "The Weeknd",
        path: "Songs/The Weeknd - Blinding Lights.mp3",
        cover: "Songcover/Blinding Lights.jpg",
        songLength: "03:19"
    },
    {
        songId: '14',
        songName: "Bom Diggy Diggy",
        artist: "Zack Knight, Jasmin Walia",
        path: "Songs/Bom Diggy Diggy - Zack Knight, Jasmin Walia.mp3",
        cover: "Songcover/Bom diggy diggy.jpg",
        songLength: "03:59"
    },
    {
        songId: '15',
        songName: "Boy with Luv (ft. Halsey)",
        artist: "BTS, Halsey",
        path: "Songs/BTS - Boy With Luv feat Halsey.mp3",
        cover: "Songcover/Boy with luv.jpg",
        songLength: "03:50"
    },
    {
        songId: '16',
        songName: "Brown Rang",
        artist: "Yo Yo Honey Singh",
        path: "Songs/Brown Rang - Yo Yo Honey Singh.mp3",
        cover: "Songcover/Brown Rang.jpg",
        songLength: "02:59"
    },
    {
        songId: '17',
        songName: "Call You Mine",
        artist: "The Chainsmokers, Bebe Rexha",
        path: "Songs/The Chainsmokers Bebe Rexha - Call You Mine.mp3",
        cover: "Songcover/Call you mine.jpg",
        songLength: "03:54"
    },
    {
        songId: '18',
        songName: "Chak De India",
        artist: "Sukhwinder Singh, Salim-Sulaiman",
        path: "Songs/Chak De India - Sukhwinder Singh.mp3",
        cover: "Songcover/Chak de India.jpg",
        songLength: "04:44"
    },
    {
        songId: '19',
        songName: "Chidiya",
        artist: "Vilen",
        path: "Songs/Vilen - Chidiya.mp3",
        cover: "Songcover/Chidiya.jpg",
        songLength: "04:03"
    },
    {
        songId: '20',
        songName: "Circles",
        artist: "Post Malone",
        path: "Songs/Post Malone - Circles.mp3",
        cover: "Songcover/Circles.jpg",
        songLength: "03:35"
    },
    {
        songId: '21',
        songName: "Complicated",
        artist: "Avril Lavigne",
        path: "Songs/Avril Lavigne - Complicated Lyrics.mp3",
        cover: "Songcover/Complicated.png",
        songLength: "04:02"
    },
    {
        songId: '22',
        songName: "Count on Me",
        artist: "Bruno Mars",
        path: "Songs/Bruno Mars - Count On Me.mp3",
        cover: "Songcover/Count on me.jpg",
        songLength: "03:18"
    },
    {
        songId: '23',
        songName: "Cradles",
        artist: "Sub Urban",
        path: "Songs/Sub Urban - Cradles.mp3",
        cover: "Songcover/Cradles.jpg",
        songLength: "03:30"
    },
    {
        songId: '24',
        songName: "Dancing with a Stranger (with Normani)",
        artist: "Sam Smith, Normani",
        path: "Songs/Dancing With A Stranger - Sam Smith, Normani.mp3",
        cover: "Songcover/dancing with a stranger.jpg",
        songLength: "02:51"
    },
    {
        songId: '25',
        songName: "Daryaa",
        artist: "Ammy Virk, Shahid Mallya",
        path: "Songs/Daryaa - Amit Trivedi Shellee  Abhishek Taapsee Vicky.mp3",
        cover: "Songcover/Daryaa.jpg",
        songLength: "04:37"
    },
    {
        songId: '26',
        songName: "death bed (coffee for your head)",
        artist: "Powfu, beabadoobee",
        path: "Songs/Powfu - death bed feat Beabadoobee.mp3",
        cover: "Songcover/death bed.jpg",
        songLength: "02:53"
    },
    {
        songId: '27',
        songName: "Dekhte Dekhte",
        artist: "Atif Aslam, Rochak Kohli",
        path: "Songs/Atif Aslam - Dekhte Dekhte.mp3",
        cover: "Songcover/dekhte dekhte.jpg",
        songLength: "04:36"
    },
    {
        songId: '28',
        songName: "Dynamite",
        artist: "BTS",
        path: "Songs/BTS - Dynamite.mp3",
        cover: "Songcover/dynamite.jpg",
        songLength: "03:18"
    },
    {
        songId: '29',
        songName: "Easier",
        artist: "5 Seconds of Summer",
        path: "Songs/Easier - 5 Seconds Of Summer.mp3",
        cover: "Songcover/Easier.jpg",
        songLength: "02:38"
    },
    {
        songId: '30',
        songName: "Falling",
        artist: "Trevor Daniel",
        path: "Songs/Trevor Daniel - Falling.mp3",
        cover: "Songcover/Falling.jpg",
        songLength: "02:39"
    },
    {
        songId: '31',
        songName: "FRIENDS",
        artist: "Marshmello, Anne-Marie",
        path: "Songs/Anne Marie - Marshmello FRIENDS.mp3",
        cover: "Songcover/friends marshmello.jpg",
        songLength: "03:25"
    },
    {
        songId: '32',
        songName: "Girls Like You (ft. Cardi B)",
        artist: "Maroon 5, Cardi B",
        path: "Songs/Maroon 5 - Girls Like You.mp3",
        cover: "Songcover/Girls like you.jpg",
        songLength: "04:57"
    },
    {
        songId: '33',
        songName: "Godzilla (ft. Juice WRLD)",
        artist: "Eminem, Juice WRLD",
        path: "Songs/Eminem - Godzilla feat Juice WRLD.mp3",
        cover: "Songcover/Godzilla.jpg",
        songLength: "03:31"
    },
    {
        songId: '34',
        songName: "Goodbyes (ft. Young Thug)",
        artist: "Post Malone, Young Thug",
        path: "Songs/Post Malone - Goodbyes ft Young Thug.mp3",
        cover: "Songcover/Goodbyes.png",
        songLength: "03:05"
    },
    {
        songId: '35',
        songName: "Graveyard",
        artist: "Halsey",
        path: "Songs/Graveyard - Halsey.mp3",
        cover: "Songcover/Graveyard.jpg",
        songLength: "03:02"
    },
    {
        songId: '36',
        songName: "Happier",
        artist: "Marshmello, Bastille",
        path: "Songs/Marshmello ft Bastille  Happier.mp3",
        cover: "Songcover/Happier.jpg",
        songLength: "03:38"
    },
    {
        songId: '37',
        songName: "Hawayein",
        artist: "Arijit Singh",
        path: "Songs/Hawayein - Arijit Singh, Pritam.mp3",
        cover: "Songcover/Hawayein.jpg",
        songLength: "04:51"
    },
    {
        songId: '38',
        songName: "I Don't Care (with Justin Bieber)",
        artist: "Ed Sheeran, Justin Bieber",
        path: "Songs/Ed Sheeran, Justin Bieber - I Dont Care.mp3",
        cover: "Songcover/I don't care.jpg",
        songLength: "03:40"
    },
    {
        songId: '39',
        songName: "I Like Me Better",
        artist: "Lauv",
        path: "Songs/I Like Me Better - Lauv.mp3",
        cover: "Songcover/I like me better.jpg",
        songLength: "03:18"
    },
    {
        songId: '40',
        songName: "Intentions (ft. Quavo)",
        artist: "Justin Bieber, Quavo",
        path: "Songs/Justin Bieber - Intentions ft Quavo.mp3",
        cover: "Songcover/Intentions.jpg",
        songLength: "03:33"
    },
    {
        songId: '41',
        songName: "In The End - Mellen Gi Remix",
        artist: "Tommee Profitt, Mellen Gi",
        path: "Songs/In The End - Linkin Park, Mellen Gi  Tommee Profitt Remix.mp3",
        cover: "Songcover/In the end mellen Gi remix.jpg",
        songLength: "03:39"
    },
    {
        songId: '42',
        songName: "Ishq Sufiyana (Male)",
        artist: "Kamal Khan",
        path: "Songs/Ishq Sufiyana - Vishal  Shekhar.mp3",
        cover: "Songcover/Ishq Sufiyana.jpg",
        songLength: "05:44"
    },
    {
        songId: '43',
        songName: "Just The Way You Are",
        artist: "Bruno Mars",
        path: "Songs/Bruno Mars - Just The Way You Are.mp3",
        cover: "Songcover/Just the way you are.jpg",
        songLength: "03:42"
    },
    {
        songId: '44',
        songName: "Kaam 25 - Sacred Games",
        artist: "DIVINE",
        path: "Songs/Kaam 25 DIVINE.mp3",
        cover: "Songcover/Kaam 25.jpg",
        songLength: "02:41"
    },
    {
        songId: '45',
        songName: "Kaun Hain Voh",
        artist: "Kailash Kher",
        path: "Songs/Kaun Hain Voh.mp3",
        cover: "Songcover/Kaun hai wo.jpg",
        songLength: "03:36"
    },
    {
        songId: '46',
        songName: "Kho Gaye Hum Kahan",
        artist: "Jasleen Royal, Prateek Kuhad",
        path: "Songs/KHO GAYE HUM KAHAN  -  JASLEEN ROYAL.mp3",
        cover: "Songcover/kho gaye hum kahan.jpg",
        songLength: "03:42"
    },
    {
        songId: '47',
        songName: "Lean On",
        artist: "DJ Snake, Major Lazer",
        path: "Songs/Major Lazer  DJ Snake  Lean On feat MØ.mp3",
        cover: "Songcover/lean on.jpg",
        songLength: "02:59"
    },
    {
        songId: '48',
        songName: "Let Me Down Slowly",
        artist: "Alec Benjamin",
        path: "Songs/Let Me Down Slowly - Alec Benjamin.mp3",
        cover: "Songcover/Let me down slowly.jpg",
        songLength: "02:57"
    },
    {
        songId: '49',
        songName: "Levitating (ft. DaBaby)",
        artist: "Dua Lipa, DaBaby",
        path: "Songs/Dua Lipa - Levitating Feat DaBaby.mp3",
        cover: "Songcover/Levitating ft Dababy.jpg",
        songLength: "03:23"
    },
    {
        songId: '50',
        songName: "Liggi",
        artist: "Ritviz",
        path: "Songs/Ritviz - Liggi.mp3",
        cover: "Songcover/Liggi.jpg",
        songLength: "03:01"
    },
    {
        songId: '51',
        songName: "lovely (with Khalid)",
        artist: "Billie Eilish, Khalid",
        path: "Songs/Billie Eilish - lovely with Khalid.mp3",
        cover: "Songcover/Lovely.jpg",
        songLength: "03:21"
    },
    {
        songId: '52',
        songName: "Love The Way You Lie",
        artist: "Eminem, Rihanna",
        path: "Songs/Eminem - Love the way you lie ft Rihanna.mp3",
        cover: "Songcover/love the way you lie.png",
        songLength: "04:26"
    },
    {
        songId: '53',
        songName: "Make It Right (ft. Lauv)",
        artist: "BTS, Lauv",
        path: "Songs/BTS - Make It Right feat Lauv.mp3",
        cover: "Songcover/make it right lauv.jpg",
        songLength: "03:46"
    },
    {
        songId: '54',
        songName: "Matargashti",
        artist: "Mohit Chauhan",
        path: "Songs/Matargashti - Mohit Chauhan.mp3",
        cover: "Songcover/Matargashti.jpg",
        songLength: "05:28"
    },
    {
        songId: '55',
        songName: "ME! (ft. Brendon Urie)",
        artist: "Taylor Swift",
        path: "Songs/Taylor Swift - ME Ft Brendon Urie.mp3",
        cover: "Songcover/Me taylor swift.jpg",
        songLength: "03:15"
    },
    {
        songId: '56',
        songName: "Memories",
        artist: "Maroon 5",
        path: "Songs/Maroon 5 - Memories.mp3",
        cover: "Songcover/Memories.jpg",
        songLength: "03:11"
    },
    {
        songId: '57',
        songName: "Mere Liye Tum Kaafi Ho",
        artist: "Ayushmann Khurrana",
        path: "Songs/Mere Liye Tum Kaafi Ho - Ayushman KhuranaJeetu  Tanishk  Vayu.mp3",
        cover: "Songcover/Mere liye tum kaafi ho.jpg",
        songLength: "02:05"
    },
    {
        songId: '58',
        songName: "Moh Moh Ke Dhaage (Female)",
        artist: "Monali Thakur, Varun Grover",
        path: "Songs/Moh Moh Ke Dhaage - Papon Monali  Anu Malik.mp3",
        cover: "Songcover/moh moh ke dhaage.jpg",
        songLength: "03:28"
    },
    {
        songId: '59',
        songName: "Nagri Ho Ayodhya Si",
        artist: "Maithili Thakur",
        path: "Songs/Nagri Ho Ayodhya Si - Maithili Thakur.mp3",
        cover: "Songcover/Nagri ho Ayodhya si.jpg",
        songLength: "04:24"
    },
    {
        songId: '60',
        songName: "Namo Namo",
        artist: "Amit Trivedi",
        path: "Songs/Namo Namo - Amit Trivedi  Amitabh B.mp3",
        cover: "Songcover/namo namo.jpg",
        songLength: "05:28"
    },
    {
        songId: '61',
        songName: "Nazm Nazm",
        artist: "Arko",
        path: "Songs/Nazm Nazm - Arko.mp3",
        cover: "Songcover/Nazm Nazm.jpg",
        songLength: "03:55"
    },
    {
        songId: '62',
        songName: "The Nights",
        artist: "Avicii",
        path: "Songs/Avicii - The Nights.mp3",
        cover: "Songcover/The nights.jpg",
        songLength: "02:56"
    },
    {
        songId: '63',
        songName: "Numb",
        artist: "Linkin Park",
        path: "Songs/Linkin Park - Numb.mp3",
        cover: "Songcover/Numb.jpg",
        songLength: "03:07"
    },
    {
        songId: '64',
        songName: "O Saathi",
        artist: "Atif Aslam, Arko",
        path: "Songs/O SAATHI - Atif Aslam.mp3",
        cover: "Songcover/O saathi.jpg",
        songLength: "04:11"
    },
    {
        songId: '65',
        songName: "Roses - Imanbek Remix",
        artist: "SAINt JHN, Imanbek",
        path: "Songs/SAINt JHN - Roses Imanbek Remix.mp3",
        cover: "Songcover/roses remix.jpg",
        songLength: "02:50"
    },
    {
        songId: '66',
        songName: "Sakhiyaan",
        artist: "Maninder Buttar",
        path: "Songs/Sakhiyan ft Manindar Buttar.mp3",
        cover: "Songcover/Sakhiyaan.jpg",
        songLength: "03:00"
    },
    {
        songId: '67',
        songName: "Save Your Tears (with Ariana Grande)",
        artist: "The Weekend, Ariana Grande",
        path: "Songs/The Weekend  Ariana Grande - Save Your Tears Remix.mp3",
        cover: "Songcover/Save your tears remix.jpg",
        songLength: "03:06"
    },
    {
        songId: '68',
        songName: "Scars To Your Beautiful",
        artist: "Alessia Cara",
        path: "Songs/Alessia Cara - Scars To Your Beautiful.mp3",
        cover: "Songcover/Scars to your beautiful.jpg",
        songLength: "03:43"
    },
    {
        songId: '69',
        songName: "Shayad",
        artist: "Arijit Singh",
        path: "Songs/Arijit Singh - Shayad.mp3",
        cover: "Songcover/Shayad.jpg",
        songLength: "04:21"
    },
    {
        songId: '70',
        songName: "Shree Krishna Govind Hare Murari",
        artist: "Maanya Arora",
        path: "Songs/Shree Krishna Govind Hare Murari - Maanya Arora.mp3",
        cover: "Songcover/Shree Krishna Govind hare murari.jpg",
        songLength: "05:33"
    },
    {
        songId: '71',
        songName: "Soch Na Sake",
        artist: "Arijit Singh, Tulsi Kumar",
        path: "Songs/SOCH NA SAKE - Arijit Singh Tulsi Kumar.mp3",
        cover: "Songcover/Soch na sake.jpg",
        songLength: "04:41"
    },
    {
        songId: '72',
        songName: "Soja Zara",
        artist: "Madhushree",
        path: "Songs/Soja Zara.mp3",
        cover: "Songcover/Soja Zara.jpg",
        songLength: "03:39"
    },
    {
        songId: '73',
        songName: "Something Just Like This",
        artist: "The Chainsmokers, Coldplay",
        path: "Songs/The Chainsmokers  Coldplay - Something Just Like This.mp3",
        cover: "Songcover/Something just like this.jpg",
        songLength: "04:07"
    },
    {
        songId: '74',
        songName: "STAY (with Justin Bieber)",
        artist: "The Kid LAROI, Justin Bieber",
        path: "Songs/The Kid LAROI Justin Bieber - Stay.mp3",
        cover: "Songcover/Stay.jpg",
        songLength: "02:20"
    },
    {
        songId: '75',
        songName: "Subhanallah",
        artist: "Sreeram, Shilpa Rao",
        path: "Songs/Subhanallah - Pritam.mp3",
        cover: "Songcover/Subhanallah.jpg",
        songLength: "04:10"
    },
    {
        songId: '76',
        songName: "Sunflower",
        artist: "Post Malone, Swae Lee",
        path: "Songs/Post Malone Swae Lee - Sunflower.mp3",
        cover: "Songcover/Sunflower.jpg",
        songLength: "02:42"
    },
    {
        songId: '77',
        songName: "Take You Dancing",
        artist: "Jason Derulo",
        path: "Songs/Jason Derulo - Take You Dancing.mp3",
        cover: "Songcover/Take you dancing.jpg",
        songLength: "03:09"
    },
    {
        songId: '78',
        songName: "Taki Taki (with Selena and Cardi)",
        artist: "DJ Snake, Selena Gomez, Cardi B",
        path: "Songs/DJ Snake - Taki Taki ft Selena Gomez, Ozuna, Cardi B.mp3",
        cover: "Songcover/Taki taki.jpg",
        songLength: "03:52"
    },
    {
        songId: '79',
        songName: "Tere Sang Yaara",
        artist: "Atif Aslam",
        path: "Songs/Tere Sang Yaara - Arko  Atif Aslam  Manoj M.mp3",
        cover: "Songcover/Tere sang yaara.jpg",
        songLength: "04:58"
    },
    {
        songId: '80',
        songName: "Treat You Better",
        artist: "Shawn Mendes",
        path: "Songs/Shawn Mendes - Treat You Better.mp3",
        cover: "Songcover/Treat you better.jpg",
        songLength: "03:08"
    },
    {
        songId: '81',
        songName: "Tu Hi Mera",
        artist: "Shafqat Amanat Ali",
        path: "Songs/Tu Hi Mera - Shafqat Amanat Ali, Pritam.mp3",
        cover: "Songcover/Tu hi mera.jpg",
        songLength: "04:35"
    },
    {
        songId: '82',
        songName: "Tu Hi Yaar Mera",
        artist: "Arijit Singh, Neha Kakkar",
        path: "Songs/Tu Hi Yaar Mera - Ananya P  RochakArijit SNeha K.mp3",
        cover: "Songcover/tu hi yaar mera.jpg",
        songLength: "03:38"
    },
    {
        songId: '83',
        songName: "Tum Se Hi",
        artist: "Mohit Chauhan",
        path: "Songs/Tum Se Hi - Mohit Chauhan  Pritam.mp3",
        cover: "Songcover/Tum se hi.jpg",
        songLength: "05:39"
    },
    {
        songId: '84',
        songName: "We Don't Talk Anymore (ft. Selena Gomez)",
        artist: "Charlie Puth, Selena Gomez",
        path: "Songs/Charlie Puth - We Dont Talk Anymore feat Selena Gomez.mp3",
        cover: "Songcover/we don't talk anymore.jpg",
        songLength: "03:38"
    },
    {
        songId: '85',
        songName: "Whatever It Takes",
        artist: "Imagine Dragons",
        path: "Songs/Imagine Dragons - Whatever It Takes.mp3",
        cover: "Songcover/Whatever it takes.jpg",
        songLength: "03:20"
    },
    {
        songId: '86',
        songName: "You Broke me First",
        artist: "Tata McRae",
        path: "Songs/Tate McRae - you broke me first.mp3",
        cover: "Songcover/You broke me first.jpg",
        songLength: "02:48"
    }
]



// ----------------------------------
// main work starts from here
// ----------------------------------

// variables

let currSongIndex = 1;
let audioElement = new Audio(songs[currSongIndex-1].path);
let masterPlay = $("#pause-play-btn");
let myProgressBar = $("#songProgressBar");
let shuffleState = false;
let loopState = 0;


$(document).ready(function() {

    // event listeners
    // handle play-pause

    masterPlay.click(function() {
        if (audioElement.paused || audioElement.currentTime<=0) {
            audioElement.play();
            $("#pause-play-btn").html("pause_circle_filled");
            $("#topGif").css("opacity", 1);
            $("#bottomGif").css("opacity", 1);
            $("#playingSongCover").css("box-shadow", "0 0 20px 5px black");
            $("#playingSongCover")[0].src = songs[currSongIndex-1].cover;
            Array.from($(".song-play-buttons"))[currSongIndex-1].innerText = "pause_circle_outline";

            Array.from($(".song-play-buttons"))[currSongIndex-1].parentNode.parentNode.children[0].innerHTML = "<img src='GIFs/playingbars1.gif'  id='currSongBar' alt=''></img>";
            Array.from($(".song-play-buttons"))[currSongIndex-1].parentNode.parentNode.style.color = "yellow";
        } 
        else {
            audioElement.pause();
            $("#pause-play-btn").html("play_circle_filled");
            $("#topGif").css("opacity", 0);
            $("#bottomGif").css("opacity", 0);
            $("#playingSongCover").css("box-shadow", "0 0 0 0");
            Array.from($(".song-play-buttons")).forEach((ele)=>{
                ele.innerText = "play_circle_outline";
            })

            songItems.forEach((element, i)=>{
                element.getElementsByClassName("songId")[0].innerText = songs[i].songId;
                $(element).css("color", "white");
            });
            
        }
    });


    function str_pad_left(string,pad,length) {
        return (new Array(length+1).join(pad)+string).slice(-length);
    }

    // timeupdate
    audioElement.ontimeupdate = ontimeupdatefn;
    
    function ontimeupdatefn() {

        let currSongTimeMins = Math.floor(Math.round(audioElement.currentTime)/60);
        let currSongTimeSecs = Math.round(audioElement.currentTime)%60;
        let currSongDurMins = Math.floor(Math.round(audioElement.duration)/60);
        let currSongDurSecs = Math.round(audioElement.duration)%60;

        $("#currSongTime").html(str_pad_left(currSongTimeMins,'0',2) + ':' + str_pad_left(currSongTimeSecs,'0',2));
        $("#currSongDuration").html(str_pad_left(currSongDurMins,'0',2) + ':' + str_pad_left(currSongDurSecs,'0',2));

        let currProgressBar = parseInt((Math.round(audioElement.currentTime)/Math.round(audioElement.duration)) * 100);
        myProgressBar.val(currProgressBar);

        if (currProgressBar==100) {

            if (loopState==1) {
                if (shuffleState) {
                    var a = Math.floor((Math.random() * songs.length) + 1);
                    while (a==currSongIndex) {
                        a = Math.floor((Math.random() * songs.length) + 1);
                    }
                    currSongIndex = a;
                } else {
                    if (currSongIndex > (songs.length - 1)) {
                        currSongIndex = 1;
                    }
                    else {
                        currSongIndex += 1;
                    }
                }

                audioElement = new Audio(songs[currSongIndex-1].path);
                audioElement.play();

                Array.from($(".song-play-buttons")).forEach((ele)=>{
                    ele.innerText = "play_circle_outline";
                })

                songItems.forEach((element, i)=>{
                    element.getElementsByClassName("songId")[0].innerText = songs[i].songId;
                    $(element).css("color", "white");
                });

                $("#playingSongCover")[0].src = songs[currSongIndex-1].cover;
                $("#currSongName")[0].innerText = songs[currSongIndex-1].songName;
                $("#currSongArtist")[0].innerText = songs[currSongIndex-1].artist;

                Array.from($(".song-play-buttons"))[currSongIndex-1].parentNode.parentNode.children[0].innerHTML = "<img src='GIFs/playingbars1.gif'  id='currSongBar' alt=''></img>";
                Array.from($(".song-play-buttons"))[currSongIndex-1].parentNode.parentNode.style.color = "yellow";
                Array.from($(".song-play-buttons"))[currSongIndex-1].innerText = "pause_circle_outline";

                audioElement.ontimeupdate = ontimeupdatefn;
            }
            else if (loopState==2) {
                audioElement.play();
            }
            else {
                $("#pause-play-btn").html("play_circle_filled");
                $("#topGif").css("opacity", 0);
                $("#bottomGif").css("opacity", 0);
                $("#playingSongCover").css("box-shadow", "0 0 0 0");
                Array.from($(".song-play-buttons")).forEach((ele)=>{
                    ele.innerText = "play_circle_outline";
                })

                songItems.forEach((element, i)=>{
                    element.getElementsByClassName("songId")[0].innerText = songs[i].songId;
                    $(element).css("color", "white");
                });
            }
        }

        $("#songProgressBar").css("background-size", myProgressBar.val() + '% 100%');

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
        element.getElementsByClassName("songLength")[0].innerText = songs[i].songLength;
    });


    Array.from($(".song-play-buttons")).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            
            if (e.target.innerText == "play_circle_outline") {

                Array.from($(".song-play-buttons")).forEach((ele)=>{
                    ele.innerText = "play_circle_outline";
                })

                e.target.innerText = "pause_circle_outline";        

                currSongIndex = parseInt(element.parentNode.parentNode.children[0].innerText);
                songItems.forEach((element, i)=>{
                    element.getElementsByClassName("songId")[0].innerText = songs[i].songId;
                    $(element).css("color", "white");
                });
                element.parentNode.parentNode.children[0].innerHTML = "<img src='GIFs/playingbars1.gif' id='currSongBar' alt=''></img>";
                $(element).parent().parent().css("color", "yellow");
                audioElement.src = songs[currSongIndex-1].path;
                audioElement.play();

                $("#pause-play-btn").html("pause_circle_filled");
                $("#topGif").css("opacity", 1);
                $("#bottomGif").css("opacity", 1);
                $("#playingSongCover").css("box-shadow", "0 0 20px 5px black");

                $("#playingSongCover")[0].src = songs[currSongIndex-1].cover;
                $("#currSongName")[0].innerText = songs[currSongIndex-1].songName;
                $("#currSongArtist")[0].innerText = songs[currSongIndex-1].artist;
            }
            else {
                e.target.innerText == "play_circle_outline";

                audioElement.pause();
                $("#pause-play-btn").html("play_circle_filled");
                $("#topGif").css("opacity", 0);
                $("#bottomGif").css("opacity", 0);
                $("#playingSongCover").css("box-shadow", "0 0 0 0");
                Array.from($(".song-play-buttons")).forEach((ele)=>{
                    ele.innerText = "play_circle_outline";
                })

                songItems.forEach((element, i)=>{
                    element.getElementsByClassName("songId")[0].innerText = songs[i].songId;
                });
            }
            
        })
    });

    Array.from($(".mark-fvr8-buttons")).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            if (e.target.innerText == "favorite") {
                e.target.innerText = "favorite_border";
            } else {
                e.target.innerText = "favorite";
            }
        })
    });

    $("#next").click(function() {

        if (shuffleState) {
            var a = Math.floor((Math.random() * songs.length) + 1);
            while (a==currSongIndex) {
                a = Math.floor((Math.random() * songs.length) + 1);
            }
            currSongIndex = a;
        }
        else {
            if (currSongIndex > (songs.length - 1)) {
                currSongIndex = 1;
            }
            else {
                currSongIndex += 1;
            }
        }

        audioElement.src = songs[currSongIndex-1].path;
        audioElement.play();
        $("#pause-play-btn").html("pause_circle_filled");
        $("#topGif").css("opacity", 1);
        $("#bottomGif").css("opacity", 1);
        $("#playingSongCover").css("box-shadow", "0 0 20px 5px black");

        $("#playingSongCover")[0].src = songs[currSongIndex-1].cover;
        $("#currSongName")[0].innerText = songs[currSongIndex-1].songName;
        $("#currSongArtist")[0].innerText = songs[currSongIndex-1].artist;

        Array.from($(".song-play-buttons")).forEach((ele)=>{
            ele.innerText = "play_circle_outline";
        })
        
        Array.from($(".song-play-buttons"))[currSongIndex-1].innerText = "pause_circle_outline";

        songItems.forEach((element, i)=>{
            element.getElementsByClassName("songId")[0].innerText = songs[i].songId;
            $(element).css("color", "white");
        });
        Array.from($(".song-play-buttons"))[currSongIndex-1].parentNode.parentNode.children[0].innerHTML = "<img src='GIFs/playingbars1.gif' id='currSongBar' alt=''></img>";
        Array.from($(".song-play-buttons"))[currSongIndex-1].parentNode.parentNode.style.color = "yellow";
    });

    $("#prevs").click(function() {
        if (currSongIndex<2) {
            currSongIndex = songs.length;
        }
        else {
            currSongIndex -= 1;
        }
        audioElement.src = songs[currSongIndex-1].path;
        audioElement.play();
        $("#pause-play-btn").html("pause_circle_filled");
        $("#topGif").css("opacity", 1);
        $("#bottomGif").css("opacity", 1);
        $("#playingSongCover").css("box-shadow", "0 0 20px 5px black");

        $("#playingSongCover")[0].src = songs[currSongIndex-1].cover;
        $("#currSongName")[0].innerText = songs[currSongIndex-1].songName;
        $("#currSongArtist")[0].innerText = songs[currSongIndex-1].artist;

        Array.from($(".song-play-buttons")).forEach((ele)=>{
            ele.innerText = "play_circle_outline";
        })
        Array.from($(".song-play-buttons"))[currSongIndex-1].innerText = "pause_circle_outline";
        songItems.forEach((element, i)=>{
            element.getElementsByClassName("songId")[0].innerText = songs[i].songId;
            $(element).css("color", "white");
        });
        Array.from($(".song-play-buttons"))[currSongIndex-1].parentNode.parentNode.children[0].innerHTML = "<img src='GIFs/playingbars1.gif' id='currSongBar' alt=''></img>";
        Array.from($(".song-play-buttons"))[currSongIndex-1].parentNode.parentNode.style.color = "yellow";
    });

    // --------- For Volume Bar ------------

    $("#volumeBar").on('input', function() {
        
        var currVolume = $("#volumeBar").val();

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

        $("#volumeBar").css("background-size", currVolume + '% 100%');
    });

    $("#volumeBar").mouseup(function() {
        $("#volume-num").css("visibility", "hidden");
    });

    $("#volumeBar").mousedown(function() {
        $("#volume-num").css("visibility", "visible");
    });

    // --------- Button Functionalities ------------

   $("#forward10secs").click(function() {
        
        if (audioElement.currentTime+10<audioElement.duration) {
            audioElement.currentTime += 10;
        }
        else {
            audioElement.currentTime = audioElement.duration;
        }
    });

    $("#back10secs").click(function() {
        if (audioElement.currentTime<10) {
            audioElement.currentTime = 0;
        }
        else {
            audioElement.currentTime -= 10;
        }
    });

    $("#shuffle").click(function() {
        if (shuffleState==true) {
            shuffleState = false;
            $("#shuffle").html("shuffle");
        }
        else {
            shuffleState = true;
            $("#shuffle").html("shuffle_on");
        }
    });


    // loopState 2 --> repeat 1
    // loopState 1 --> repeal all
    // loopState 0 --> no repeat
    $("#loop").click(function() {
        if (loopState==2) {
            loopState = 0;
            $("#loop").html("repeat");
            console.log("No repeat");
        }
        else if (loopState==1) {
            loopState = 2;
            $("#loop").html("repeat_one");
            console.log("Repeat 1")
        }
        else {
            loopState = 1;
            $("#loop").html("repeat_on");
        }
    });

})
