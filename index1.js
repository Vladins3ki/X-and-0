let cont = 0;
let turn = 1;
let xList = [];
let oList =[];
let Player1 , Player2;
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
function clickDiv(id){
    let position = Number(id);
    if(turn == 1){
        document.getElementById(position).innerHTML = "X"
        document.getElementById(position).style.pointerEvents = 'none';
        document.getElementById("playerTurn").innerHTML = Player2 + "'s" + " turn!";
        xList.push(position);
        ++cont;
        turn = 2;
    }else{
        document.getElementById(position).innerHTML = "O";
        document.getElementById(position).style.pointerEvents = 'none';
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
    Player1 = document.getElementById("player1").value;
    Player2 = document.getElementById("player2").value;
    document.getElementById("player1").value = "";
    document.getElementById("player2").value = "";
    document.getElementById("playerTurn").innerHTML = Player1 + "'s" + "turn!";
}
