const container = document.getElementById('container');
for (let i = 0; i <= 8; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('click', ox);
  container.appendChild(cell);
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
  cell.textContent = 'x';
});

function ox(event) {
  let cell = event.target;
  cell.textContent = "o";
}