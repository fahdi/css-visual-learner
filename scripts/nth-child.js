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
