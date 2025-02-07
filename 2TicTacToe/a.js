const container = document.getElementById('container');
let turn = "X";
let table = new Array(9).fill(null);

for (let i = 0; i < 9; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell');
  container.appendChild(cell);
  cell.dataset.index = i;
  cell.addEventListener('click', (event)=>{
    const Mark = mark(event.target);
    Mark.tiktoks();
  });
}

function mark(cell) {
  let index = cell.dataset.index;
  if (cell.textContent !== "") return;
  return {
    cell,
    tiktoks(){
      if (turn === "X") {
        cell.textContent = turn;
        table[index] = turn;
        if (checkwin()) {
          alert("X wins!");
          reset();
        } else if (checkdraw()) {
          alert("Draw!");
          reset();
        }
        turn = "O";
      } else {
        cell.textContent = turn;
        table[index] = turn;
        if (checkwin()) {
          alert("X wins!");
          reset();
        } else if (checkdraw()) {
          alert("Draw!");
          reset();
        }
        turn = "X";
      }
    }
  }
}

function checkwin (){
  const win = [
    [0,1,2], [3,4,5], [6,7,8], //Horizontal
    [0,3,6], [1,4,7], [2,5,8], //Vertical
    [0,4,8], [2,4,6]           //Diagonal
  ];

  return win.some((pattern) => {
    const [a, b, c] = pattern;
    if (table[a] !== null && table[a] === table[b] && table[a] === table[c]){
      return true;
    }
    else return false;
  });
}

function checkdraw(){
  return table.every((cell) => cell !== null);
}

function reset(){
  let cells = document.querySelectorAll('.cell');
  return cells.forEach(element => {
    element.textContent = "";
    table = new Array(9).fill(null);
  });
}