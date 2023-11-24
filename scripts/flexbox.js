document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('flexDirection')
    .addEventListener('change', function(e){
      document.querySelector('.flex-container').style.flexDirection =
        e.target.value;
    });
  document
    .getElementById('alignItems')
    .addEventListener('change', function(e){
      document.querySelector(
        '#alignItemsVisualizer .flex-container'
      ).style.alignItems = e.target.value;
    });
  document
    .getElementById('justifyContent')
    .addEventListener('change', (e) => {
      document.querySelector('#justifyContentVisualizer .flex-container'
      ).style.justifyContent = e.target.value;
    });

    document
    .getElementById('alignContent')
    .addEventListener('change', (e) => {
      document.querySelector('#alignContentVisualizer .flex-container'
      ).style.alignContent = e.target.value;
    })

  // Get the range input and animate button
  const rangeInput = document.getElementById('container-width');
  const animateButton = document.getElementById('animate-width');

  // Function to update the width of the flex containers
  function updateWidth(value){
    document.querySelectorAll('.flex-container').forEach(container => {
      container.style.width = value + 'px';
    });
  }

  // Event listener for the range input
  rangeInput.addEventListener('input', (e) => {
    updateWidth(e.target.value);
  });

  // Function to animate the flex containers
  function animateWidth(){
    // Toggle a class that changes the width over time
    document.querySelectorAll('.flex-container').forEach(container => {
      container.classList.add('animate-width');
      // Remove the class after the animation ends
      container.addEventListener('animationend', () => {
        container.classList.remove('animate-width');
      }, { once: true });
    });
  }

// Add similar event listeners for other Flexbox properties
