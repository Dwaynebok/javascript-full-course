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

    var d = new Date();
    var n = d.toLocaleTimeString();
    alert("The time is: \n"+n);

    var day = d.getDay();
    var daylist = ["sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
    console.log("today is :" + daylist[day] + "");
    var hour = d.getUTCHours();
    var minutes = d.getUTCMinutes();
    var seconds = d.getUTCSeconds();




})();
