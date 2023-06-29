var n = document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonClicked=this.innerHTML;
    makeSound(buttonClicked);
})
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
})

function makeSound(buttonClicked){
    if(buttonClicked==='w'){
        var sound = new Audio("sounds/"+"tom-1.mp3");
        sound.play();
    }
    if(buttonClicked==='a'){
        var sound = new Audio("sounds/"+"tom-2.mp3");
        sound.play();
    }
    if(buttonClicked==='s'){
        var sound = new Audio("sounds/"+"tom-3.mp3");
        sound.play();
    }
    if(buttonClicked==='d'){
        var sound = new Audio("sounds/"+"tom-4.mp3");
        sound.play();
    }
    if(buttonClicked==='j'){
        var sound = new Audio("sounds/"+"crash.mp3");
        sound.play();
    }
    if(buttonClicked==='k'){
        var sound = new Audio("sounds/"+"kick-bass.mp3");
        sound.play();
    }
    if(buttonClicked==='l'){
        var sound = new Audio("sounds/"+"snare.mp3");
        sound.play();
    }
}