
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
let filled=0;
const winConditions =
   [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
   ];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "x";
let running = false;
initializeGame();

function initializeGame() {
   cells.forEach(cell => cell.addEventListener("click", cellClicked));
   restartBtn.addEventListener("click", restartGame);
   statusText.textContent = currentPlayer + "'s turn";

   running = true;
}
function cellClicked() {
   const cellIndex = this.getAttribute("cellIndex");
   if (options[cellIndex] != "" || !running) {
      return;
   }

   updateCell(this, cellIndex);

   checkWinner();

}
function updateCell(cell, index) {

   options[index] = currentPlayer;
   cell.innerText = currentPlayer;
   // filled++;
}
function changePlayer() {
   // currentPlayer = currentPlayer == "x"? "o" : "x";
   if (currentPlayer=='x') {
      currentPlayer='o';
   } else {
      currentPlayer='x';
   }

   statusText.innerHTML = currentPlayer +"'s turn";
}
function checkWinner() {
   filled++;
   changePlayer();
   let roundWon = false;

   for (let i = 0; i <= winConditions.length; i++) 
   {
      let condition = winConditions[i];

      const cellA = options[condition[0]];
      const cellB = options[condition[1]];
      const cellC = options[condition[2]];
      if (!cellA == "" || !cellB == "" || !cellC == "")
       {
         if (cellA == cellB && cellB == cellC) 
         {
            roundWon = true;
            filled=0;

            break;
         }
         else{
            drawfunction();
         }
      }

   }
   if (roundWon) {
      statusText.innerHTML = (currentPlayer=='x'?currentPlayer='o':currentPlayer='x') + "'s win";
      running = false;
   }

}
const drawfunction=()=>{
   if(filled===9){
      console.log(filled);
      statusText.innerHTML = "Draw";
      running = false;
   }
} 

function restartGame() {
   filled=0;
   currentPlayer = "x";
   for (let i = 0; i < 9; i++) {
     options[i]='';
      
   }
   // options["", "", "", "", "", "", "", "", ""];
   statusText.textContent = currentPlayer + "'s turn";
   cells.forEach(cell => cell.textContent = "");
   running = false;
   initializeGame();
}

