//GAMEBOARD MODULE
const gameboard = (() => {
    let winningMessage;

    const setWinningMessageX = () => {
        winningMessage = 'X WINS';
        return winningMessage;
    }

    const setWinningMessageO = () => {
        winningMessage = 'O WINS';
        return winningMessage;
    }

    const checkWinning = (gameArray) => {
        if (gameArray[0] == "X" && gameArray[1] == "X" && gameArray[2] == "X") {
            setWinningMessageX();
            return true;
        } else if (gameArray[3] == "X" && gameArray[4] == "X" && gameArray[5] == "X") {
            setWinningMessageX();
            return true;
        } else if (gameArray[6] == "X" && gameArray[7] == "X" && gameArray[8] == "X") {
            setWinningMessageX();
            return true;
        } else if (gameArray[0] == "X" && gameArray[3] == "X" && gameArray[6] == "X") {
            setWinningMessageX();
            return true;
        } else if (gameArray[1] == "X" && gameArray[4] == "X" && gameArray[7] == "X") {
            setWinningMessageX();
            return true;
        } else if (gameArray[2] == "X" && gameArray[5] == "X" && gameArray[8] == "X") {
            setWinningMessageX();
            return true;
        } else if (gameArray[0] == "X" && gameArray[4] == "X" && gameArray[8] == "X") {
            setWinningMessageX();
            return true;
        } else if (gameArray[6] == "X" && gameArray[4] == "X" && gameArray[2] == "X") {
            setWinningMessageX();
            return true;
        } else if (gameArray[0] == "O" && gameArray[1] == "O" && gameArray[2] == "O") {
            setWinningMessageO();
            return true;
        } else if (gameArray[3] == "O" && gameArray[4] == "O" && gameArray[5] == "O") {
            setWinningMessageO();
            return true;
        } else if (gameArray[6] == "O" && gameArray[7] == "O" && gameArray[8] == "O") {
            setWinningMessageO();
            return true;
        } else if (gameArray[0] == "O" && gameArray[3] == "O" && gameArray[6] == "O") {
            setWinningMessageO();
            return true;
        } else if (gameArray[1] == "O" && gameArray[4] == "O" && gameArray[7] == "O") {
            setWinningMessageO();
            return true;
        } else if (gameArray[2] == "O" && gameArray[5] == "O" && gameArray[8] == "O") {
            setWinningMessageO();
            return true;
        } else if (gameArray[0] == "O" && gameArray[4] == "O" && gameArray[8] == "O") {
            setWinningMessageO();
            return true;
        } else if (gameArray[6] == "O" && gameArray[4] == "O" && gameArray[2] == "O") {
            setWinningMessageO();
            return true;
        } else {
            return false;
        }
    }

    const checkForTie = (gameArray) => {
        i = 0;
        gameArray.forEach(square => {
            if (square == "X" || square == "O") {
                i += 1;
                console.log(i);
            }
        if (i == 9) {
            alert("TIE");
            resetBoard();
        }
        })
    }
    
    const resetBoard = () => {
        UI.gridsquare.forEach(square => {
            square.innerText = '';
        })
        UI.resetButtons();
        twoPlayer = UI.twoPlayerButton;
        twoPlayer.addEventListener('click', () => {
            gamemodes.startTwoPlayer();
            UI.clearButtons();
        });
    }

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
        if (checkWinning(gameArray) == true) {
            alert(winningMessage);
            resetBoard();
        }   else {
            checkForTie(gameArray);
        }  
    }

    return {
        setBoard
    }
    
  })();

//UI MODULE
const UI = (() => {
    const gridsquare = document.querySelectorAll('.grid-square');
    const onePlayerButton = document.getElementById('1p');
    const twoPlayerButton = document.getElementById('2p');
    marker = "X";
    const placePiece = (target) => {
        if (target.innerText ==! "<empty string>") {
            target.innerText = marker;
            changeMarker();
        } 
    } 

    const changeMarker = () => {
        if (marker === "X") {
            marker = "O";
        } else if (marker = "O") {
            marker = "X";
        }  
    }

    const resetGame = () => {
        location.reload();
    }

    const clearButtons = () => {
        onePlayerButton.remove();
        twoPlayerButton.remove();
    }
    
    const resetButtons = () => {
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        div1.idName = '1p';
        div2.idName = '2p';
        div1.className = 'button';
        div2.className = 'button';
        div1.appendChild(document.createTextNode('i'));
        div2.appendChild(document.createTextNode('ii'));
        const wrapper = document.querySelector('#button-group');
        wrapper.appendChild(div1);
        wrapper.appendChild(div2);
    }

    const showAlert = (message) => {
        const div = document.createElement('div');
        div.className = 'alert';
        div.appendChild(document.createTextNode(message));
        const wrapper = document.querySelector('#alert-wrapper');
        wrapper.appendChild(div);
        
        //vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 
        3000);
    }


    return {
        placePiece,
        gridsquare,
        onePlayerButton,
        twoPlayerButton,
        resetGame,
        clearButtons,
        showAlert,
        resetButtons
    };
})();

//GAME MODES
const gamemodes = (() => {
    const gridsquare = UI.gridsquare;
    const startTwoPlayer = () => {
        UI.showAlert("2PLAYER");
        gridsquare.forEach(square => {
            console.log(square.innerText)
            square.addEventListener('click', () => {
                UI.placePiece(square);
                gameboard.setBoard();     
            });
        });
    };

    return{
        startTwoPlayer
    }

})();

//RUN THE GAME
twoPlayer = UI.twoPlayerButton;
twoPlayer.addEventListener('click', () => {
    gamemodes.startTwoPlayer();
    UI.clearButtons();
});