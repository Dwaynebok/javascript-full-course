/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   /* document.getElementById("counter").addEventListener("keypress", function (){


        let counter = 0;
        let input = document.getElementById("pass-one");
        let counterX = document.getElementById("counter");

        var x = document.getElementById("pass-one").addEventListener("keypress", function (){
            if(counter<11){
                counterX.innerHTML = ${counter}'/10';
                counterX++
            }
            else{
                x.setAttribute("maxlength", "10")
            }

            })
        })

    */




    let counter = 0;
    let input = document.getElementById("pass-one");
    let counterX = document.getElementById("counter");

    let x = document.getElementById("pass-one").addEventListener("keypress", ()=>{
        if(counter<10){
            counterX.innerHTML = `${counter}/10`;
            counter++
        }
        else {
            //set max input length
            input.setAttribute("maxlength", "10")
        }

    });



})();
