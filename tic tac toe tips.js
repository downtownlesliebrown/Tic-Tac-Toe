// Challenge 1
// var colors = ["red", "blue", "orange", "yellow", "green"];
// var i = 0;
//
// function changeWords(){
//     document.getElementById("display").innerHTML = colors[i];
//     i++;
//     if (i === colors.length){
//         i = 0;
//     }
// }

// Challenge 2
// var container = [[1,2,3],[2,3,4],[3,4,5],[6,6,4]];
// //
// function printNumbers(){
//     for(var i = 0; i < container.length; i++){
//         document.getElementById('challengeTwoList').innerHTML += "<li id='item" + i + "'></li>";
//         for(var j = 0; j < container[i].length; j++){
//             document.getElementById('item' + i).innerHTML += container[i][j] + " ";
//         }
//     }
// }

// CHALLENGE 3
var colors = ["red", "blue", "orange", "yellow", "green"];
var i = 0;

function changeColor(value) {
    document.getElementById("block" + value).style.backgroundColor = colors[i];
    i++;
    if (i === colors.length) {
        i = 0
    }
}
