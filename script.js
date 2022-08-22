let color = '#000000';
let randomMode = false;

const eraser = document.querySelector('.eraser');
const randomColor = document.querySelector('.random');
const colorMode = document.querySelector('.color');
const colorPicker = document.getElementById('color-picker');

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
  const div = document.querySelectorAll('.board > div');
  div.forEach(function (e) {
    e.onmouseenter = (mouse) => {
      if (mouse.buttons == 1)
        if (randomMode) {
          const R = Math.floor(Math.random() * 256);
          const G = Math.floor(Math.random() * 256);
          const B = Math.floor(Math.random() * 256);
          e.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
        } else {
          e.style.backgroundColor = color;
        }
    };
  });
}

eraser.onclick = () => {
  randomMode = false;
  color = '#ffffff';
};

randomColor.onclick = () => {
  randomMode = true;
};

colorMode.onclick = () => {
  randomMode = false;
  color = colorPicker.value;
};

colorPicker.oninput = () => {
  randomMode = false;
  color = colorPicker.value;
};

function changeSize(value) {
  if (value < 1 || value > 100) {
    document.querySelector('.error').style.display = 'block';
  } else {
    const div = document.querySelectorAll('.board > div');
    div.forEach((div) => div.remove());
    createBoard(value);
  }
}
