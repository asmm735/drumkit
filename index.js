
for( var i=0; i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var clicked = this.innerHTML;
        makeSound(clicked);   
        animateButtons(clicked);
});

}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animateButtons(event.key);
});

function makeSound(n){
    switch (n) {
        case "w":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "a":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "s":
             var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
        case "j":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
        case "k":
                var crash= new Audio('sounds/crash.mp3');
                crash.play();
                break;
        
        case "l":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;

        default: console.log(this.innerHTML);
            break;
       }

}
function animateButtons(current){
 document.querySelector("."+current).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+current).classList.remove("pressed");
    }, 200);
}