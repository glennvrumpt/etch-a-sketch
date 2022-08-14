let color = '#000000';
let changeColor = false;

function createBoard(input) {
  const board = document.querySelector('.board');
  document.querySelector('.error').style.display = 'none';
  let size = input;
  let boardSize = size * size;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr`;
  for (let i = 0; i < boardSize; i++) {
    let node = document.createElement('div');
    board.append(node);
  }
  draw();
}

createBoard(16);

function draw() {
  let div = document.querySelectorAll('.board > div');
  div.forEach(function (e) {
    e.onmouseenter = (mouse) => {
      if (mouse.buttons == 1)
        if (changeColor) {
          e.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
          e.style.backgroundColor = color;
        }
    };
  });
}

eraser = document.querySelector('.eraser');
randomColor = document.querySelector('.random');
defaultColor = document.querySelector('.default');

eraser.onclick = () => {
  changeColor = false;
  color = '#ffffff';
};

defaultColor.onclick = () => {
  changeColor = false;
  color = '#000000';
};

randomColor.onclick = () => {
  changeColor = true;
};

function changeSize(value) {
  if (value < 1 || value > 100) {
    document.querySelector('.error').style.display = 'block';
  } else {
    let div = document.querySelectorAll('.board > div');
    div.forEach((div) => div.remove());
    createBoard(value);
  }
}
