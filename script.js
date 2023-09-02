let audioElement=new Audio('songs/1.mp3');
let songIndex=0
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItem"));

let songs=[
    {songName:"Warriyo-Mortal",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Invincible",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Jangi-Heroes",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Some what",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Let me Love you",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        masterSongName.innerText=songs[songIndex-1].songName
        audioElement.play()
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100

})
const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((e)=>{
    e.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex=parseInt(e.target.id)
      e.target.classList.remove( "fa-play-circle")
      e.target.classList.add("fa-pause-circle")  
      audioElement.src=`songs/${songIndex}.mp3`
      masterSongName.innerText=songs[songIndex-1].songName
      audioElement.currentTime=0;
      audioElement.play()
      gif.style.opacity=1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    })
})

document.getElementById("next").addEventListener('click',()=>{
    if (songIndex<5){
        songIndex+=1
    }
    else{
    songIndex=1
    }
    audioElement.src=`songs/${songIndex}.mp3`
    masterSongName.innerText=songs[songIndex-1].songName
    audioElement.currentTime=0;
    audioElement.play()
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})
document.getElementById("prev").addEventListener('click',()=>{
    if (songIndex<=1){
        songIndex=5
    }
    else{
    songIndex-=1
    }
    audioElement.src=`songs/${songIndex}.mp3`
    masterSongName.innerText=songs[songIndex-1].songName
    audioElement.currentTime=0;
    audioElement.play()
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})