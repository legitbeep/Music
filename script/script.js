const boom = document.getElementById("boom");
const bam = document.getElementById("bam");
const bop = document.getElementById("bop");
const badabap = document.getElementById("badabap");
const pow = document.getElementById("pow");

let music = new Audio();
function playSound(audio){
    music = new Audio(audio);
    music.play();
}
boom.addEventListener('click',function (){
    new Audio("beats/boom.mp3").play();
} );
bam.addEventListener('click',function (){
    new Audio("beats/bam.mp3").play();
} );
bop.addEventListener('click',function (){
    new Audio("beats/bao.mp3").play();
} );
badabap.addEventListener('click',function (){
    new Audio("beats/badaBapBoom.mp3").play();
} );
pow.addEventListener('click',function (){
    new Audio("beats/pow.mp3").play();
} );