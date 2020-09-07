/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let promise = new Promise((resolve , reject) => {
      resolve (window.lib.getPosts(function (){


          }).then (res => {
              console.log(res);
          })

      )
    })









        /*
            .then((res) => {
                // successfully got data
                resolve(res);
            })
            .catch((err) => {
                // an error occured
                reject(err);
            });

         */

    })() ;
