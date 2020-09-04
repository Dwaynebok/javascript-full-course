/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {




    var target = document.getElementById("target");
    var one = document.getElementById("part-one");
    var two = document.getElementById("part-two");
    var three = document.getElementById("part-three");
    var four = document.getElementById("part-four");

    var bttnonemin = one.getAttribute("data-min");
    var bttntwomin = two.getAttribute("data-min");
    var bttnthreemin = three.getAttribute("data-min");
    var bttnfourmin = four.getAttribute("data-min");

    var bttnonemax  = one.getAttribute("data-max");
    var bttntwomax = two.getAttribute("data-max");
    var bttnthreemax = three.getAttribute("data-max");
    var bttnfourmax = four.getAttribute("data-max");

    one.addEventListener('click',function (){
        if (bttnonemin < bttnonemax){
            bttnonemin++;
            one.innerHTML = bttnonemin;
            target.innerHTML = `0${bttnonemin} ${bttntwomin} ${bttnthreemin} ${bttnfourmin}`;
        }
    });


    two.addEventListener('click',function (){
        if (bttntwomin < bttntwomax){
            bttntwomin++;
            if ( bttntwomin < 10){
                bttntwomin = `0${bttntwomin}`
            }
            two.innerHTML = bttntwomin;
            target.innerHTML = `0${bttnonemin} ${bttntwomin} ${bttnthreemin} ${bttnfourmin}`;
        }
    });

    three.addEventListener('click',function (){
        if ( bttnthreemin < bttnthreemax){
            bttnthreemin++;

            if ( bttnthreemin < 10){
                bttnthreemin = `0${bttnthreemin}`
            };

            three.innerHTML = bttnthreemin;
            target.innerHTML = `0${bttnonemin} ${bttntwomin} ${bttnthreemin} ${bttnfourmin}`;
        }
    });

    four.addEventListener("click", function (){
        if ( bttnfourmin < bttnfourmax){
            bttnfourmin++;
            if ( bttnfourmin < 10){
                bttnfourmin = `0${bttnfourmin}`
            };
            four.innerHTML = bttnfourmin;
            target.innerHTML = `0${bttnonemin} ${bttntwomin} ${bttnthreemin} ${bttnfourmin}`;
        }
    });






   /* var bonemin = Math.min(460,499);
    var btwomin = Math.min(0 , 99);
    var bthreemin = Math.min(0,99);
    var bfourmin = Math.min(0 ,99);

    var bonemax = Math.max(499,460);
    var btwomax = Math.max(99,0);
    var bthreemax = Math.max(99,0);
    var bfourmax = Math.max(99,0);



    one.addEventListener("click",function (){
        if (bonemin < bonemax) {
            one++;
            one.innerHTML = bonemin;
            target.innerHTML = '0${bonemin}';
        }
    })

    */


})();
