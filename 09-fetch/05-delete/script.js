/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let input = document.getElementById("hero-id").value;


    document.getElementById("run").addEventListener("click", function (){


        fetch("http://localhost:3000/heroes")
            .then(response =>{
                return response.json();
            }).then(allData => {
                allData.forEach(data => {
                    if (data.id == input){
                        let index = allData.indexOf(data);
                        allData.splice(index,1);
                        console.log(allData);
                    }
                })
            }
        )






    })
})();
