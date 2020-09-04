
/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var text = document.getElementById("target").innerText;
    var letters = Array.from(text);
    var wave = "";
    //wave is created at the bottom//
    var fontSize = [1,2,3,4,5,4,3,2,1]

for(let i=0; i<letters.length;i++){
    wave+= "<span>"+letters[i]+"</span>";


}

document.getElementById("target").innerHTML = wave;
var characters = document.getElementsByTagName("span");
for(let a=0; a<characters.length;a++){
    var b = a+1;
    characters[b].style.fontSize = fontSize[a%fontSize.length]+"2px";
}



    /*var letterContainer = document.querySelector(".target");
    var letters = letterContainer.innerText;

    letters = letters.split("letters");

    letterContainer.innerText = "letters";

     */








})();
