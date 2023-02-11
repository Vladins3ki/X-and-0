let cont = 0;
let turn = 1;
let Player1 , Player2;
let xList = [];
let oList = [];
let position;
let id ,player, sign;
let winnerCombination = [
[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[3,5,7]
]
function sub(id){
    player = document.getElementById(id).value;
    document.getElementById(id).value = "";

}
function theSign(position,sign){
    document.getElementById(position).innerHTML = sign;
    document.getElementById(position).style.pointerEvents = 'none';
}
function clickDiv(id){
    position = Number(id);
    if(turn == 1){
        theSign(position, "X");
        document.getElementById("playerTurn").innerHTML = Player2 + "'s" + " turn!";
        xList.push(position);
        ++cont;
        turn = 2;
    } else{
        theSign(position,"O");
        document.getElementById("playerTurn").innerHTML = Player1 + "'s" + " turn!";
        oList.push(position);
        ++cont;
        turn = 1;
    }
    for(let i = 0; i < winnerCombination.length; ++i){
        let xFounded = winnerCombination[i].every( ai => xList.includes(ai) );
        if(xFounded == true){
            document.getElementById("playerTurn").innerHTML = Player1 + " WINS!";
        }
        let oFounded = winnerCombination[i].every( ai => oList.includes(ai) );
        if(oFounded == true){
            document.getElementById("playerTurn").innerHTML = Player2 + " WINS!";
        }  
    }
    if(cont == 9){
        document.getElementById("playerTurn").innerHTML = "DRAW!";
    }
}
function Submit(){
    sub("player1");
    Player1 = player;
    sub("player2");
    Player2 = player;
    document.getElementById("playerTurn").innerHTML = Player1 + "'s" + "turn!";
}
