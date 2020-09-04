/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


  /*  document.getElementById("increment").addEventListener("click", function (){

        let newNumber = document.getElementById("target").innerHTML;
    document.getElementById("target").innerHTML;
        (newNumber.innerHTML)++;
        console.log(newNumber);

    })

   */
    document.getElementById("target").innerHTML =  localStorage.getItem("counter");
    console.log(localStorage.getItem("counter"));

    document.getElementById("increment").addEventListener("click", function() {
        let newNumber = document.getElementById("target");
        (newNumber.innerHTML)++;
        localStorage.setItem("counter", newNumber.innerHTML);

    })








/*
    document.getElementById("increment").value;
    localStorage.setItem();
    var count = 0;


    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " +
        localStorage.clickcount + " time(s).";

 */

})();
