/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    console.log(
        Array.apply(null, {length: 100}).map(function(val, index) {
            index++;
            if (index % 15 == 0){return "FizzBuzz";}
            if (index % 3 == 0){return "Fizz";}
            if (index % 5 == 0){return "Buzz";}
            return index;
        }).join('\n')
    );

})();
