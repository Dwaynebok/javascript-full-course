/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at} 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

   /* const func = ()=> {
        let promisePost= Promise.resolve(window.lib.getPosts());
        promisePost.then (resultPost =>{
            resultPost.forEach(function (post){
                let promiseComment = Promise.resolve(window.lib.getComments(post.id))
               promiseComment.then(comment => {
                   post.comments = comment
                   console.log(resultPost);
               })
            })
        })
    }

    document.getElementById("run").addEventListener("click", func)

    */



    document.getElementById("run").addEventListener("click", func)

    function func() {
         new Promise((resolve, reject) => {
            let result = window.lib.getPosts()
            resolve(result);
        }).then( (result) => result.forEach(function (post) {
                new Promise((resolve, reject) => {
                    let result = window.lib.getComments(post.id)
                    resolve(result);
                }).then(result => post.comments = result)
             console.log(post);
            }

        ))

}


})();




/*

document.getElementById("run").addEventListener("click", function (){
    window.lib.getPosts(function (error, articles){
        if(error){
            console.log(1)
        }else{
            console.log(null);
            articles.forEach(function (article){
                window.lib.getComments(article.id , function (error, comments){
                    article.comments = comments
                    console.log(article)
                })
            })
        }

    })
})

 */


/*

document.getElementById("run").addEventListener("click", function (){
    window.lib.getPosts(function (error, articles){
        if(error){
            console.log(1)
        }else{
            console.log(null);
            articles.forEach(function (article){
                window.lib.getComments(article.id , function (error, comments){
                    article.comments = comments
                    console.log(article)
                })
            })
        }

    })
})

 */



