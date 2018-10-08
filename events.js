var input = document.getElementById("nameInput");

function capsLockOn(event) {
var x = event.getModifierState("CapsLock");
if (x === true) {
    alert("Thank you for using the Caps Lock key!  Please deactivate the Caps Lock Key and press ok to continue writing your name without it.");
} 
}
input.addEventListener("keypress", goPink);
function goPink(event) {
    input.style.backgroundColor = "pink";
}

function unicodeVal(event) {
    var x = event.which;
    var y = event.location;
    document.getElementById("ageUnicode").innerHTML = "The Unicode Value is: " + x + " and the location is: " + y;
}

addEventListener("keydown", function quitAndCelebrate(event){
    if(event.keyCode == 81){
    document.body.style.background = 'url(https://media.giphy.com/media/ZmdErsWqppgMo/giphy.gif)';
    var parent = document.getElementById("keyEvents");
    var child = document.getElementById("keyEventForm");
    parent.removeChild(child);
        
    }
});



