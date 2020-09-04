/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target");
    const buttons = document.querySelectorAll("button");
    const input = document.querySelectorAll("input");

    let minArray = [];
    let maxArray = [];
    input.forEach(function (inputIn){
        let inputMin = inputIn.getAttribute("data-min");
        let inputMax = inputIn.getAttribute("data-max");
        minArray.push(inputMin);
        maxArray.push(inputMax);
    })

    minArray.forEach(function (min ,index){
        const  interval = setInterval(function (){
            if (min < maxArray[index]){
                min++;
                if (min < 10){
                    min = ("0" + min);
                } input[index].value = min
            }
            else {
                min = minArray[index]
            }

        },20)

        buttons[index].addEventListener("click", function (){
            clearTimeout(interval);
            target.innerHTML = `0${input[0].value} ${input[1].value} ${input[2].value} ${input[3].value}`;
        })
    })







/*
    random();

    function random (){
        var x = Math.floor(Math.random()* (499 - 460)+ 460);
        console.log(x);
    }

    var target = document.getElementById("target");
    var one = document.getElementById("fix-part-one");
    var two = document.getElementById("fix-part-two");
    var three = document.getElementById("fix-part-three");
    var four = document.getElementById("fix-part-four");

    var inputOne = document.getElementById("part-one");

    var inputOneMin = one.getAttribute("data-min");
    var bttntwomin = two.getAttribute("data-min");
    var bttnthreemin = three.getAttribute("data-min");
    var bttnfourmin = four.getAttribute("data-min");

    var inputOneMax  = one.getAttribute("data-max");
    var bttntwomax = two.getAttribute("data-max");
    var bttnthreemax = three.getAttribute("data-max");
    var bttnfourmax = four.getAttribute("data-max");

    one.addEventListener("click", function (){
        var bttnOneRandom = Math.floor(Math.random()* (inputOneMax - inputOneMin)+ inputOneMin);
        console.log(bttnOneRandom);


    });

    two.addEventListener("click", function (){


    });

    three.addEventListener("click", function (){


    });

    four.addEventListener("click", function (){


    });

 */


})();
