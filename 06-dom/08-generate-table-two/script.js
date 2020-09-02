/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target");
    let newTable = document.createElement("table");
    let tableBody = document.createElement("tbody");


    let arrayTd = [];
    let operation = [];
    for(let i=0;i<10;i++){
        const tr = document.createElement("tr");
        for(let x=0;x<10;x++){
            const td = document.createElement("td");
            arrayTd.push(td);
            tr.appendChild(td);

            //multiplication
            const y = (i+1)*(x+1);
            operation.push(y);
        }
        tableBody.appendChild(tr);
    }
    newTable.appendChild(tableBody);
    target.appendChild(newTable);

    //display the multiplication to table
    operation.forEach(($number,index)=>{
        arrayTd[index].innerHTML = operation[index];
    })



})();
