/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function (){

        fetch("http://localhost:3000/heroes")
            .then(response => response .json())
            .then(data => appendData(data));
        function appendData(data){
            let name =   document.getElementById("hero-name").value;
            let alterEgo = document.getElementById("hero-alter-ego").value;
            let powers = document.getElementById("hero-powers").value;
            let id = data.length +1;

            data[data.length] = {
                "id": id,
                "name":  name,
                "alterEgo": alterEgo,
                "abilities": [powers]


            }
            console.log(data);

        }





    })




})();
