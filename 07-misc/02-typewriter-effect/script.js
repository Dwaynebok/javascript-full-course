/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    /*
    var i = 0;
    var text = document.getElementById("target").innerText;
    var speed = "100";

    function typeWriter(){
        if (i < text.length){
            document.getElementById("target").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

     */


    /*
    var index = 0;
    var text = document.getElementById('target').innerHTML = "je ne sais pas qui est l'assassin ! Y en a-t-il vraiment un ?"

    function type()
    {
        document.getElementById('').innerHTML += text.charAt(index);
        index += 1;
        var t = setTimeout(type,100);
    }

    type();

     */


    /*
    function type(i, t, ie, oe) {

         let input = document.getElementById("target").innerHTML;
        document.getElementById("target").innerHTML += input.charAt(i);
        setTimeout(function(){
            ((i < input.length) ? type(i+1, t, ie, oe) : false);
        }, t);
    }

    type(0, 100, "material", "target");

     */


    let text = document.getElementById("target").innerText;
    document.getElementById("target").innerHTML = "";

    let i = 0;
    let speed = 100;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("target").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }


    typeWriter(text);


    /* function typeWriter() {
         if (i < text.length) {
             document.getElementById("target").innerHTML += text.charAt(i);
             i++;
             setTimeout(typeWriter, ;
         }

     */


    /*  document.getElementById("target").innerText;
    var letters = Array.from(text);
    var typewriter = "";

    for(let i=0;i<letters.length;i++){

    }

   */


})();
