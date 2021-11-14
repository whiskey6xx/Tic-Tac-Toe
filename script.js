//GAMEBOARD MODULE
const gameboard = (() => {
    let gameArray;
   

    const checkWinning = (gameArray) => {
        if (gameArray[0] == "X" && gameArray[1] == "X" && gameArray[2] == "X") {
            alert("X WINS");
        } else if (gameArray[3] == "X" && gameArray[4] == "X" && gameArray[5] == "X") {
            alert("X WINS");
        } else if (gameArray[6] == "X" && gameArray[7] == "X" && gameArray[8] == "X") {
            alert("X WINS");
        } else if (gameArray[0] == "X" && gameArray[3] == "X" && gameArray[6] == "X") {
            alert("X WINS");
        } else if (gameArray[1] == "X" && gameArray[4] == "X" && gameArray[7] == "X") {
            alert("X WINS");
        } else if (gameArray[2] == "X" && gameArray[5] == "X" && gameArray[8] == "X") {
            alert("X WINS");
        } else if (gameArray[0] == "X" && gameArray[4] == "X" && gameArray[8] == "X") {
            alert("X WINS");
        } else if (gameArray[6] == "X" && gameArray[4] == "X" && gameArray[2] == "X") {
            alert("X WINS");
        } else if (gameArray[0] == "O" && gameArray[1] == "O" && gameArray[2] == "O") {
            alert("O WINS");
        } else if (gameArray[3] == "O" && gameArray[4] == "O" && gameArray[5] == "O") {
            alert("O WINS");
        } else if (gameArray[6] == "O" && gameArray[7] == "O" && gameArray[8] == "O") {
            alert("O WINS");
        } else if (gameArray[0] == "O" && gameArray[3] == "O" && gameArray[6] == "O") {
            alert("O WINS");
        } else if (gameArray[1] == "O" && gameArray[4] == "O" && gameArray[7] == "O") {
            alert("O WINS");
        } else if (gameArray[2] == "O" && gameArray[5] == "O" && gameArray[8] == "O") {
            alert("O WINS");
        } else if (gameArray[0] == "O" && gameArray[4] == "O" && gameArray[8] == "O") {
            alert("O WINS");
        } else if (gameArray[6] == "O" && gameArray[4] == "O" && gameArray[2] == "O") {
            alert("O WINS");
        } 
    }

    /* check for tie */

    const setBoard = () => {
        const squareOne = document.getElementById("one").innerText;
        const squareTwo = document.getElementById("two").innerText;
        const squareThree = document.getElementById("three").innerText;
        const squareFour = document.getElementById("four").innerText;
        const squareFive = document.getElementById("five").innerText;
        const squareSix = document.getElementById("six").innerText;
        const squareSeven = document.getElementById("seven").innerText;
        const squareEight = document.getElementById("eight").innerText;
        const squareNine = document.getElementById("nine").innerText;

        gameArray = [squareOne, squareTwo, squareThree,
            squareFour, squareFive, squareSix,
            squareSeven, squareEight, squareNine];
        console.log(gameArray);
        checkWinning(gameArray);

    }

    return {
        setBoard
    }
    

  })();


//UI MODULE
const UI = (() => {
    let gridsquare = document.querySelectorAll('.grid-square');
    marker = "X";
    const placePiece = (target) => {

        if (target.innerText ==! "<empty string>") {
            target.innerText = marker;
        } else {
            alert("Don't do that")
        }
        
        if (marker === "X") {
            marker = "O";
        } else if (marker = "O") {
            marker = "X";
        }  
    } 

    /* clear board */
    return {
        placePiece,
        gridsquare
    };
})();


//RUN THE GAME
gridsquare = UI.gridsquare;
gridsquare.forEach(square => {
    square.addEventListener('click', () => {
        UI.placePiece(square);
        gameboard.setBoard();
        
    });
});