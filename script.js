function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.querySelectorAll('.interactive-element').forEach((element, index) => {
  element.addEventListener('mouseover', function() {
    let color;
    if (index === 3) {
      this.style.color = 'blue';
      this.style.fontSize = '20px';
      document.getElementById('css-rule-display').innerText = 'color: blue; font-size: 20px;';
    } else {
      color = getRandomColor();
      this.style.backgroundColor = color;
      document.getElementById('css-rule-display').innerText = `background-color: ${color};`;
    }
  });

  element.addEventListener('mouseout', function() {
    if (index === 3) {
      this.style.color = '';
      this.style.fontSize = '';
    } else {
      this.style.backgroundColor = '';
    }
    document.getElementById('css-rule-display').innerText = 'Hover over the boxes below to see CSS effects!';
  });
});
