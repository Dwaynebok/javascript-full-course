/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", post)

    async function post (){
        let allPost = await window.lib.getPosts();
       allPost.forEach(post => {
            async function comment(){
                let allComment = await window.lib.getComments(post.id);
                post.comment = allComment
                console.log(post);
            }
            comment();
       })

    }



  //  allPost.forEach(post =>() {
  //      post.comment = await window.lib.getComments(post.id)
 //   }



})();
