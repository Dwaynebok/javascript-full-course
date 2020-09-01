/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var source = document.getElementById("source").dataset.image;
    console.log(source);

    var newImage = document.createElement("img");
    newImage.setAttribute("src",source);

    document.getElementById("target").appendChild(newImage);

    var element = document.getElementById("source");
    element.parentNode.removeChild(element);
    console.log(source.image);



})();

/*
firststep - we extracted link of the image from html to js
second - created an element for the image
third -  linked the image data of step 1 to image element of step 2 to display it
fourt - <div>
    <div> created element </div>
    <div>
        <figure>target element</figure>
    </div

    div>
    <figure><div> created element </div></figure>

last step -  Removed element using parentnode and removechild as command
    then console.log;
*/