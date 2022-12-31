var buttonLength = document.querySelectorAll("button").length;

for (var i=0; i<buttonLength; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function() {

        // console.log(this);

        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    
    // this.classList.add("hit");    
    })
}