/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    let target = document.getElementById("target");
    let NewTable = document.createElement("table");
    let x = [];
    for(let i=0;i<11;i++){
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        //add the table elements to the row with append
        tr.appendChild(td);
        x.push(tr);
    }
    x.forEach(function($tr){
        NewTable.appendChild($tr);
        target.appendChild(NewTable);
    })



})();



/*
created a variable for the target
created a new variable for the new table we are about to create
created an empty array with X
made a for loop
and created a new variable for tr and td
//add the table elements to the row with append
used the appendchild to join the tr and td to the parentnode
used push to add new rows to the table

indicated the x with the for each loop
and made a function
 */