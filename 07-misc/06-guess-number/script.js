/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var number  = Math.floor(Math.random()* (100 - 1)+ 1);
    console.log(number);

    var count = 1;

    while(true) {

        var input = prompt("guess the number");

        if (number < input) {
            alert("too high");
            count++;
        } else if (number > input) {
            count++;
            alert("too low");
        } else {
            alert("Congratulations you guessed " + count + "correctly");
            break;
        }
    }




})();
