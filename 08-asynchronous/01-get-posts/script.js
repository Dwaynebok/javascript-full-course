/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {



    document.getElementById("run").addEventListener("click", function (){
        window.lib.getPosts(function (error,article){
            if (error){
                console.log(1)
            }else {
                console.log(null);
                console.log(article);
            }

        })
    })

/*
    const message = function() {
        console.log("This message is shown after 3 seconds");
    }

    setTimeout(message, 3000)

 */



    /*

    wp.getPosts({
            status: 'trash',
        },
        ['title','status'],
        function( err, data ) {
            console.log( data );
        }
});

     */



})();
