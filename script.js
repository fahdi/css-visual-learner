function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const cssEffects = [
  { // Background Color
    apply: (element) => {
      const color = getRandomColor();
      element.style.backgroundColor = color;
      return `background-color: ${color};`;
    }
  },
  { // Border Radius
    apply: (element) => {
      element.style.borderRadius = '50%';
      return 'border-radius: 50%;';
    }
  },
  { // Box Shadow
    apply: (element) => {
      element.style.boxShadow = '10px 10px 5px grey';
      return 'box-shadow: 10px 10px 5px grey;';
    }
  },
  { // Font Size & Color
    apply: (element) => {
      element.style.color = 'blue';
      element.style.fontSize = '14px';
      return 'color: blue; font-size: 11px;';
    }
  },
  { // Transform Scale
    apply: (element) => {
      element.style.transform = 'scale(1.5)';
      return 'transform: scale(1.5);';
    }
  },
  { // Box 6: Transform Rotate
    apply: (element) => {
      element.style.transform = 'rotate(45deg)';
      return 'transform: rotate(45deg);';
    }
  },
  { // Box 7: Transform Translate
    apply: (element) => {
      element.style.transform = 'translate(50px, 50px)';
      return 'transform: translate(50px, 50px);';
    }
  },
  { // Box 8: Transform Skew
    apply: (element) => {
      element.style.transform = 'skew(10deg, 10deg)';
      return 'transform: skew(10deg, 10deg);';
    }
  },
  { // Box 9: Transition
    apply: (element) => {
      const color = getRandomColor();
      element.style = `transition:all 0.5s ease; background-color: ${color}; cursor: pointer;`;
      return `transition:all 0.5s ease; background-color: ${color}; cursor: pointer;`;
    }
  },
  { // Box 10: Animation
    apply: (element) => {
      const color = getRandomColor();
      element.style = `animation: spin 2s linear infinite; background-color: ${color}; cursor: pointer;`;
      return `animation: spin 2s linear infinite; background-color: ${color}; cursor: pointer;`;
    }
  },
  { // Box 11: Keyframes (Requires additional CSS)
    apply: (element) => {
      element.classList.add('keyframe-example');
      return '@keyframes example { from {transform: rotate(0deg);} to {transform: rotate(360deg);} }';
    }
  },
  { // Box 12: Flexbox
    apply: (element) => {
      element.style.display = 'flex';
      element.style.justifyContent = 'center';
      element.style.alignItems = 'center';
      return 'display: flex; justify-content: center; align-items: center;';
    }
  },
  { // Box 13: Grid
    apply: (element) => {
      element.style.display = 'grid';
      element.style.gridTemplateColumns = 'repeat(3, 1fr)';
      return 'display: grid; grid-template-columns: repeat(3, 1fr);';
    }
  },
  { // Box 14: Pseudo-classes (:hover example)
    apply: (element) => {
      // This requires additional CSS to demonstrate effectively
      element.classList.add('pseudo-class-example');
      return '/* Add CSS for .pseudo-class-example:hover in your stylesheet */';
    }
  },
  { // Box 15: Pseudo-elements (::before example)
    apply: (element) => {
      // This requires additional CSS to demonstrate effectively
      element.classList.add('pseudo-element-example');
      return '/* Add CSS for .pseudo-element-example::before in your stylesheet */';
    }
  },
  // Continuing from the previous examples...
  { // Box 16: Media Queries
    apply: (element) => {
      // Media queries are better demonstrated with a resizable element or window,
      // but for simplicity, we'll just change text here
      element.textContent = 'Resize the window';
      return '/* Use @media queries in your stylesheet to demonstrate this */';
    }
  },
  { // Box 17: Variables
    apply: (element) => {
      element.style.setProperty('--custom-color', 'purple');
      element.style.backgroundColor = 'var(--custom-color)';
      return ':root { --custom-color: purple; } .element { background-color: var(--custom-color); }';
    }
  },
  { // Box 18: CSS Functions
    apply: (element) => {
      element.style.width = 'calc(100% - 20px)';
      return 'width: calc(100% - 20px);';
    }
  },
  { // Box 19: CSS Units
    apply: (element) => {
      element.style.padding = '10vh 5vw';
      return 'padding: 10vh 5vw;';
    }
  },
  { // Box 20: CSS Selectors
    apply: (element) => {
      // This requires additional CSS to demonstrate effectively
      element.classList.add('css-selector-example');
      return '/* Add CSS for different selectors in your stylesheet */';
    }
  },
  { // Box 21: CSS Combinators
    apply: (element) => {
      // This requires additional CSS to demonstrate effectively
      element.classList.add('css-combinator-example');
      return '/* Add CSS for combinators like .parent > .child in your stylesheet */';
    }
  },
  { // Box 22: CSS Specificity
    apply: (element) => {
      // This is a concept that's hard to demonstrate on a single element
      element.textContent = 'Specificity Demo';
      return '/* Use multiple CSS rules with different specificities in your stylesheet */';
    }
  },
  { // Box 23: CSS Cascade
    apply: (element) => {
      // This is also a concept that's best demonstrated with multiple rules
      element.textContent = 'Cascade Demo';
      return '/* Use multiple CSS rules to demonstrate the cascade in your stylesheet */';
    }
  },
  { // Box 24: CSS Inheritance
    apply: (element) => {
      element.textContent = 'Inheritance Demo';
      return '/* Demonstrate how properties inherit from parent to child elements */';
    }
  },
  { // Box 25: CSS Box Model
    apply: (element) => {
      element.style.margin = '10px';
      element.style.border = '5px solid red';
      element.style.padding = '15px';
      return 'margin: 10px; border: 5px solid red; padding: 15px;';
    }
  },
  { // Box 26: CSS Display
    apply: (element) => {
      element.style.display = 'inline-block';
      return 'display: inline-block;';
    }
  },
  // ... continue for other boxes
];


document.addEventListener('mouseover', function(event) {
  if (event.target.classList.contains('interactive-element')) {
    const index = Array.from(document.querySelectorAll('.interactive-element')).indexOf(event.target);
    if (index >= 0 && index < cssEffects.length) {
      const text = cssEffects[index].apply(event.target);
      document.getElementById('css-rule-display').innerText = text;
    }
  }
});

document.addEventListener('mouseout', function(event) {
  if (event.target.classList.contains('interactive-element')) {
    event.target.style = '';
    document.getElementById('css-rule-display').innerText = 'Hover over the boxes below to see CSS effects!';
  }
});

