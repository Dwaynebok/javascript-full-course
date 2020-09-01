/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

 let image = document.getElementsByTagName("img");
let source = image[0].dataset.hover;
 let ogSource = image[0].src;

 image[0].addEventListener("mouseover", function (){
     image[0].setAttribute("src", source);
 });

 image[0].addEventListener("mouseout", function (){
     image[0].setAttribute("src", ogSource);
 });

})();

/*
created a variable for the image
extracted the image from html
created a new source for the image
we set the image with addeventlistener with mouseover and then set the image attribute(image url) as well
we did the same with mouseout so that when the mouse is not yet hovered on the image it becomes still
and set the attribute(image url) referring to the next created source
 */
