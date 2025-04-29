const colors = ['Merah', 'Biru', 'Hijau', 'Kuning'];
let currentColor = '';

function pickRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  currentColor = colors[randomIndex];
  document.getElementById('targetColor').textContent = currentColor;
  document.getElementById('result').textContent = '';
}

function checkColor(color) {
  const result = document.getElementById('result');
  if (color === currentColor) {
    result.textContent = "Benar! Hebat!";
    result.style.color = "green";
  } else {
    result.textContent = "Ups! Coba lagi ya!";
    result.style.color = "red";
  }
}

function nextColor() {
  pickRandomColor();
}

window.onload = pickRandomColor;
