/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

let image = document.querySelector("img");

let imgIndex = 1;

document.getElementById('next').addEventListener('click',function (){

   if (imgIndex < gallery.length){
       image.setAttribute('src',`${gallery[imgIndex]}`);
       imgIndex++;
   }else{
       imgIndex = 0
       image.setAttribute('src',`${gallery[imgIndex]}`);
       imgIndex++;
   }
})


})();

/*
created variable for the image and selected the "img" for all the images
whereby we indicated a=0
created a function for the slide
then ame to the main element and set an attribute for for the "src"
 */
