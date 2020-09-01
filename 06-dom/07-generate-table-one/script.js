/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function year(){
        var test = '<table border="1px"><thead><tr><th><</th><th colspan="0">2015-2016</th><th>></th><tr></thead><tbody>';
        var tr='';
        for(var i=0;i<10;i++){
            tr += '<tr>';
            for(var j=0;j<4;j++){
                tr += '<td>'+2015+'</td>';
            }
        }
        tr +='</tr>';
        test += tr;
        return document.getElementById('target').innerHTML = test;
    }
    year();

})();
