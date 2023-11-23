function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateNthChildStyles(selector) {
  try {
    // Reset styles
    document.querySelectorAll('.selector-visualizer li').forEach(li => {
      li.style.backgroundColor = '#eee'; // Default background color
    });

    // If the selector is not empty and is valid, apply new styles
    if (selector.trim() !== '' && isValidSelector(`.selector-visualizer li:nth-child(${selector})`)) {
      document.querySelectorAll(`.selector-visualizer li:nth-child(${selector})`).forEach(li => {
        li.style.backgroundColor = getRandomColor(); // Apply random color
      });
    }
  } catch (e) {
    console.error('Invalid selector:', e);
  }
}

// Function to check if the selector is valid
function isValidSelector(selector) {
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
});
