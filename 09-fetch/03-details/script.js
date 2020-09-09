/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=>{
    function appendData(data) {
        const target = document.getElementById("target");
        let userInput = document.getElementById("hero-id").value;
        fetch("http://localhost:3000/heroes")
            .then(response => {
                return response.json();
            }).then(allData => {
             allData.forEach(data => {
                 if (data.id == userInput) {
                     let tempVar = document.querySelector("#tpl-hero").content.cloneNode(true);
                     tempVar.querySelector(".name").innerHTML = data.name;
                     tempVar.querySelector(".alter-ego").innerHTML = data.alterEgo;
                     tempVar.querySelector(".powers").innerHTML = data.abilities;
                     target.appendChild(tempVar);
                 }
             })


            })

    }
    let run = document.getElementById("run");
    run.addEventListener("click", appendData);

})();





