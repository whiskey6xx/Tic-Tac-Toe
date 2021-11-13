//GAMEBOARD MODULE
const gameboard = (() => {
    
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

    return {
        placePiece,
        gridsquare
    };
})();


//RUN THE GAME
gridsquare = UI.gridsquare;
gridsquare.forEach(square => {
    square.addEventListener('click', () => {
        console.log(square.innerText);
        UI.placePiece(square);
        console.log(square.innerText);
    });
});