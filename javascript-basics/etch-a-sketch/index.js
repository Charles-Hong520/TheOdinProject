let isMouseDown = false;






function create_grid(n) {
  const grid = document.createElement('div');
  grid.classList.add('grid');

  const row = document.createElement('div');
  row.classList.add('row');
  for(let i = 0; i < n; i++) {
    row.appendChild(grid.cloneNode(true));
  }

  const EAS = document.querySelector('.EAS');
  for(let i = 0; i < n; i++) {
    EAS.appendChild(row.cloneNode(true));
  }
}

function color(ev) {
  if(!isMouseDown) return;
  console.log(ev.target);
  console.log(ev);
  let grid = ev.target.closest('div.grid');
  if(!grid) return;
  ev.target.classList.add('color-grid');
}







create_grid(64);
const EAS = document.querySelector('.EAS');
document.addEventListener('mousedown', (ev) => {
  isMouseDown = true;
  color(ev);
});
document.addEventListener('mouseup', (ev) => {
  isMouseDown = false;
});

document.addEventListener('mousemove', color);