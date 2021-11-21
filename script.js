//game board
const gameBoard = (() => {
    let winCount = 0;
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
        if (i == 9 && winCount == 0) {
            winCount = 1;
            UI.showAlert("TIE");
            UI.disableBoard();
        }
        })
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
        if (checkWinning(gameArray) == true && winCount == 0) {
            winCount = 1;
            UI.showAlert(winningMessage)
            UI.disableBoard();
        }   else {
            checkForTie(gameArray);
        }  
    }

    return {
        setBoard
    }

})();

//player
const players = (() => {
    const playerOne = "X";
    const playerTwo = "O";


    return {
        playerOne,
        playerTwo
    }

})();

//UI
const UI = (() => {
    
    //elements
    let marker = players.playerOne;
    const gridsquare = document.querySelectorAll('.grid-square');
    const onePlayerButton = document.getElementById('1p');
    const twoPlayerButton = document.getElementById('2p');

    //clear gamemode buttons
    const clearButtons = () => {
        onePlayerButton.remove();
        twoPlayerButton.remove();
    }

    //show alert
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

    //place marker
    const placePiece = (target) => {
        if (target.innerText ==! "<empty string>") {
            target.innerText = marker;
            changeMarker();
        } 
    } 

    //change marker
    const changeMarker = () => {
        if (marker === players.playerOne) {
            marker = players.playerTwo;
        } else if (marker = players.playerTwo) {
            marker = players.playerOne;
        }  
    }

    //place and set 
    const placeAndSet = (square) => {
        placePiece(square);
        gameBoard.setBoard();
    }


    //add listener to board
    const boardListener = () => {
        gridsquare.forEach(square => {
            square.addEventListener('click', () => {
                placeAndSet(square);
            });
        });
    }

    const boardListener2 = () => {
        gridsquare.forEach(square => {
            square.addEventListener('click', () => {
                placeAndSet(square);
                AI.placePiece();
            });
        });
    }
    //disable board
    const disableBoard = () => {
        gridsquare.forEach(square => {
            if (square.innerText == '') {
                square.innerText = "-";
                square.style.color = "#ffffff";
            }
        })
        resetButton();
    }

    const resetGame = () => {
        location.reload();
    }

    const resetButton = () => {
        let check = document.getElementById('reset')
        if (check === null) {
            const div1 = document.createElement('div');
            div1.idName = 'reset';
            div1.className = 'button';
            div1.appendChild(document.createTextNode('RESET'));
            const wrapper = document.querySelector('#button-group');
            wrapper.appendChild(div1);

            div1.addEventListener("click", () => {
                resetGame();
            })
            check = div1;
        }

        
    }

    return {
        gridsquare,
        onePlayerButton,
        twoPlayerButton,
        clearButtons,
        showAlert,
        boardListener,
        boardListener2,
        placePiece,
        disableBoard
    }

})();

//flow
const gamemodes = (() => {
    const twoPlayerMode = () => {
        UI.twoPlayerButton.addEventListener('click', () => {
            UI.clearButtons();
            UI.showAlert("2P SELECTED");
            UI.boardListener();
        });
    }

    const onePlayerMode = () => {
        UI.onePlayerButton.addEventListener('click', () => {
            UI.clearButtons();
            UI.showAlert("1P SELECTED");
            UI.boardListener2();
        });
    }

    return {
        twoPlayerMode,
        onePlayerMode
    }

})();

const AI = (() => {
    //the AI, should do the following
    //get the array of all the squares
    //check which squares are unoccupied
    //add those squares to a array
    //grab a random square from the array
    //place their piece

    const placePiece = () => {
        const gridsquare = UI.gridsquare;
        let available = [];
        gridsquare.forEach(square => {
            console.log(square.innerText);
            if (square.innerText == "") {
                available.push(square);
            }
        })
        let selected = available[Math.floor(Math.random()*available.length)];
        console.log(selected);
        UI.placePiece(selected);
        gameBoard.setBoard();
    }
    


    return {placePiece}

})();


//main
gamemodes.onePlayerMode();
gamemodes.twoPlayerMode();




/* 
 1.page loads X
 2.listener on gamemode buttons X
 3.2p clicked X
 4.buttons removed X
 5.2p message for 3 seconds X
 6.listeners on board X
 7.X is default marker X
 8.click on board to place piece X
 9.check board for win/tie X
 10.marker changed to O X
 11.On win/tie, display message X
 12.disable board X
 13.create restart button X
 14.add listener to restart button X
 15.restart clicked X
 16.reload page X
*/

