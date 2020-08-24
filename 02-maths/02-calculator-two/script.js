/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let one;
let two;


(function () {
    // to get the value of an input: document.getElementById("element-id").value


    var performOperation = function (operation) {
        // perform the operation
        switch (operation) {
            case "addition":
                checkinput();
                alert(one + two);
                break;

            case "substraction":
                checkinput();
                alert(one - two);
                break;

            case "multiplication":
                checkinput();
                alert(one * two);
                break;

            case "division":
                checkinput()
                alert(one / two)
                break

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
        $btn.addEventListener("click", function () {
            performOperation($btn.id);
        });
    });
})();


function checkinput() {
    one = parseInt(document.getElementById('op-one').value);
    two = parseInt(document.getElementById('op-two').value);
}