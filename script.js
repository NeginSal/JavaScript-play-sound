const button = document.querySelector("button");
const music= new Audio('sound/Enrique Iglesias - Not In love.mp3');
button.addEventListener("click",function(){
    let duration = music.duration;
    let muted =music.muted;
    music.play();
    console.log(duration);
    console.log(muted);
})