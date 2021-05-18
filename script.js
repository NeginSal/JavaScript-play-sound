const musics = document.querySelectorAll(".music");
console.log(musics);
for (let i=0;musics.length;i++){
    musics[i].addEventListener("click",function(){
        let music = this.innerHTML;
        console.log(music);
    })
}