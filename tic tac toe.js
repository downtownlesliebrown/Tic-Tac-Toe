var pieces = ["X","O"];
var i = 0;
var winningCombos = [[0,1,2],[3,4,5],[6,7,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8],[0,4,8]];
var team;

function placePiece(value) {
    if (document.getElementById("block" + value).innerHTML == "X" || document.getElementById("block" + value).innerHTML == "O") {
        return;
    } else {
        document.getElementById("block" + value).innerHTML = pieces[i];
        i++;
        if (i === pieces.length) {
           i = 0;
       }
   }
}


function announceWinner(value) {
    var team = document.getElementById("block" + value).innerHTML;
    for(var b = 0; b < winningCombos.length; b++){
        if (document.getElementById("block" + winningCombos[b][0]).innerHTML == team &&
            document.getElementById("block" + winningCombos[b][1]).innerHTML == team &&
            document.getElementById("block" + winningCombos[b][2]).innerHTML == team) {
                    alert(team + " is the winner!");
            reset();
                }
            }
        }

function reset() {
    for (var j=0; j <= 8; j++) {
        document.getElementById("block" + j).innerHTML = " ";
    }
    i = 0;
}



//    console.log(boardState);
//    console.log(boardState[0], boardState[1], boardState[2]);


// function teamCheck(value) {
//     if (document.getElementById("block"+ value).innerHTML == "x") {
//         var team = "x";
//     } else {
//         var team = "o";
//     } return team;
// }




// function announceWinner(value) {
//     teamCheck(value)
// }

// function announceWinner() {
//     if (boardState[0] === boardState[1] === boardState[2]) {
//         checkTeam(0);
//     } else if(boardState[3] === boardState[4]  === boardState[5]){
//         checkTeam(3);
//     } else if(boardState[6] === boardState[7]  === boardState[8]){
//         checkTeam(6);
//     } else if(boardState[2] === boardState[4]  === boardState[6]){
//         checkTeam(2);
//     } else if(boardState[0] === boardState[3]  === boardState[6]){
//         checkTeam(0);
//     } else if(boardState[1] === boardState[4]  === boardState[7]){
//         checkTeam(1);
//     } else if(boardState[2] === boardState[5]  === boardState[8]){
//         checkTeam(2);
//     } else if(boardState[0] === boardState[4] === boardState[8]){
//         checkTeam(0);
//     } else {
//         return;
//     }
// }
