/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    /*document.getElementById("target").innerHTML = ;*/

    var d = new Date();
    var month = d.toLocaleString("default",{month: "long" });
    var day = d.toLocaleDateString("default", {weekday: "long" });
    var currentDate = day + " " + d.getDate() + " " + month + " " + d.getFullYear() + ", " + d.getHours() + "h" + d.getMinutes();

    document.getElementById("target").innerHTML = month ;








})();
