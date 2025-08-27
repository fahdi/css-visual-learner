document.addEventListener('DOMContentLoaded', () => {
  /*


          <div class="interactive-element">Hex Color Text</div>
          <div class="interactive-element">Random Color Text</div>
          <div class="interactive-element">Red Background/ White Text</div>
          <div class="interactive-element">White Background/ Red Text</div>
  * */
  function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const cssEffects = [
    { // Text Color
      apply: (element) => {
        element.style.color = 'green';
        return 'color: green;';
      }
    },
    { // Text Color
      apply: (element) => {
        element.style.color = 'blue';
        return 'color: blue;';
      }
    },
    { // Text Color
      apply: (element) => {
        element.style.color = 'yellow';
        return 'color: yellow;';
      }
    },
    { // Text Color
      apply: (element) => {
        element.style.color = 'purple';
        return 'color: purple;';
      }
    },
    { // Text Color
      apply: (element) => {
        element.style.color = 'orange';
        return 'color: orange;';
      }
    },
    { // Text Color
      apply: (element) => {
        element.style.color = 'red';
        return 'color: red;';
      }
    },
    { // Text Color
      apply: (element) => {
        element.style.color = 'pink';
        return 'color: pink;';
      }
    },

    { // Background Color
      apply: (element) => {
        element.style.backgroundColor = '#144261';
        return `background-color: #144261;`;
      }
    },
    { // Background Color
      apply: (element) => {
        const color = getRandomColor();
        element.style.backgroundColor = color;
        return `background-color: ${color};`;
      }
    },
    { // Background Color
      apply: (element) => {
        const bgColor = 'red';
        const color = 'white';
        element.style.backgroundColor = bgColor;
        element.style.color = color;
        return `background-color: ${bgColor}; color: ${color};`;
      }
    },
    { // Background Color
      apply: (element) => {
        const bgColor = 'white';
        const color = 'red';
        element.style.backgroundColor = bgColor;
        element.style.color = color;
        return `background-color: ${bgColor}; color: ${color};`;
      }
    }
  ];

  document.addEventListener('mouseover', function(event){
    if (event.target.classList.contains('interactive-element')) {
      const index = Array.from(document.querySelectorAll('.interactive-element')).indexOf(event.target);
      if (index >= 0 && index < cssEffects.length) {
        const text = cssEffects[index].apply(event.target);
        document.getElementById('css-rule-display').getElementsByTagName('pre').item(0).innerText = text;
      }
    }
  });

  document.addEventListener('mouseout', function(event){
    if (event.target.classList.contains('interactive-element')) {
      // Reset styles
      event.target.style = '';

      // Remove all classes except 'interactive-element'
      for (let className of event.target.classList) {
        if (className !== 'interactive-element') {
          event.target.classList.remove(className);
        }
      }

      // Reset display text
      document.getElementById('css-rule-display').getElementsByTagName('pre').item(0).innerText = 'Hover over the boxes below to see CSS effects!';
    }
  });
});