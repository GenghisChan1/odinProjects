const container = document.getElementById('container');
for (let i = 0; i <= 8; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell');
  cell.textContent = "X";
  container.appendChild(cell);
  cell.addEventListener('click', (event)=>{
    const Ox = ox(event.target);
    Ox.tiktoks();
  });
}

function ox(cell) {
  return{
    cell,
    tiktoks: function(){
      if (cell.textContent === "X") {
        cell.textContent = "O";
      } else {
        cell.textContent = "X";
      }
    },
  }
}