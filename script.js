//GAMEBOARD MODULE
const gameboard = (() => {
    
  })();


//UI MODULE
const UI = (() => {
    let gridsquare = document.querySelectorAll('.grid-square');
    marker = "X";
    const placePiece = (target) => {
        target.innerText = marker;
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
        UI.placePiece(square);
    });
});