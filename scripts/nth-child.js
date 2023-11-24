function getRandomColor(){
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function invertColor(hex){
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);

  // Calculate the luminance of the color.
  var luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Invert the color based on luminance.
  r = Math.round(255 - r);
  g = Math.round(255 - g);
  b = Math.round(255 - b);

  // If the color is very light, make the inverted color darker, and vice versa.
  if (luminance > 180) {
    r *= 0.8;
    g *= 0.8;
    b *= 0.8;
  } else {
    r += (255 - r) * 0.8;
    g += (255 - g) * 0.8;
    b += (255 - b) * 0.8;
  }

  return '#' + padZero(r.toString(16)) + padZero(g.toString(16)) + padZero(b.toString(16));
}

function padZero(str, len){
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}

function updateNthChildStyles(selector){
  try {
    // Reset styles
    document.querySelectorAll('.selector-visualizer li').forEach(li => {
      li.style.backgroundColor = '#eee'; // Default background color
      li.style.color = '#000'; // Default text color
    });

    // If the selector is not empty and is valid, apply new styles
    if (selector.trim() !== '' && isValidSelector(`.selector-visualizer li:nth-child(${selector})`)) {
      let color = getRandomColor();
      let invertedColor = invertColor(color); // Invert the color for contrast
      document.querySelectorAll(`.selector-visualizer li:nth-child(${selector})`).forEach(li => {
        li.style.backgroundColor = color; // Apply random color
        li.style.color = invertedColor; // Apply inverted color
      });
    }
  } catch (e) {
    console.error('Invalid selector:', e);
  }
}

// Function to check if the selector is valid
function isValidSelector(selector){
  try {
    document.createDocumentFragment().querySelector(selector);
    return true;
  } catch {
    return false;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('nth-child-input');
  if (!inputField) {
    console.error('No input field found with ID nth-child-input');
    return;
  }

  inputField.addEventListener('input', () => {
    updateNthChildStyles(inputField.value);
  });

  document.querySelectorAll('.nth-rule').forEach(rule => {
    rule.addEventListener('mouseover', () => {
      updateNthChildStyles(rule.getAttribute('data-rule'));
    });

    rule.addEventListener('mouseout', () => {
      // Reset styles when not hovering
      updateNthChildStyles('');
    });
  });
});
