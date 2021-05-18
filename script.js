const musics = document.querySelectorAll(".music");
console.log(musics);
for (let i=0;musics.length;i++){
    musics[i].addEventListener("click",function(){
        let music = this.innerHTML;
        makeSound(music);
    })
}
function makeSound(name){
    console.log(name);
    switch(name){
        case"music1":
        let sound1=new Audio("sound/Enrique Iglesias - Not In love.mp3");
        sound1.play();
        break;

        case"music2":
        let sound2=new Audio("sound/Enrique Iglesias - Ring My Bells.mp3");
        sound2.play();
        break;

        case"music3":
        let sound3 = new Audio("sound/Enrique-Iglesias-El-Bano-(Ft-Bad-Bunny).mp3");
        sound3.play();
        break;

    }
}