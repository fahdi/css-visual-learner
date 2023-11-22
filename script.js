function getRandomColor(){
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.querySelectorAll('.interactive-element').forEach((element, index) => {
  element.addEventListener('mouseover', function(){
    switch (index) {
      case 0: // Background Color
        const color = getRandomColor();
        this.style.backgroundColor = color;
        document.getElementById('css-rule-display').innerText = `background-color: ${color};`;
        break;
      case 1: // Border Radius
        this.style.borderRadius = '10%';
        document.getElementById('css-rule-display').innerText = 'border-radius: 10%;';
        break;
      case 2: // Box Shadow
        this.style.boxShadow = '10px 10px 5px grey';
        document.getElementById('css-rule-display').innerText = 'box-shadow: 10px 10px 5px grey;';
        break;
      case 3: // Font Size & Color
        this.style.color = 'blue';
        this.style.fontSize = '12px';
        document.getElementById('css-rule-display').innerText = 'color: blue; font-size: 20px;';
        break;
      case 4: // Transform Scale
        this.style.transform = 'scale(1.5)';
        document.getElementById('css-rule-display').innerText = 'transform: scale(1.5);';
        break;
    }
  });

  element.addEventListener('mouseout', function(){
    this.style = ''; // Reset all styles on mouseout
    document.getElementById('css-rule-display').innerText = 'Hover over the boxes below to see CSS effects!';
  });
});
