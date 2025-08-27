document.addEventListener('DOMContentLoaded', () => {
  const flexDirection = document.getElementById('flexDirection');
  if (flexDirection) {
    flexDirection
      .addEventListener('change', function(e){
        document.querySelector('.flex-container').style.flexDirection =
          e.target.value;
      });
  }
  const alignItems = document.getElementById('alignItems');
  if (alignItems) {
    alignItems.addEventListener('change', function(e){
      document.querySelector(
        '#alignItemsVisualizer .flex-container'
      ).style.alignItems = e.target.value;
    });
  }
  const justifyContent = document.getElementById('justifyContent');
  if (justifyContent) {
    justifyContent.addEventListener('change', (e) => {
      document.querySelector('#justifyContentVisualizer .flex-container'
      ).style.justifyContent = e.target.value;
    });
  }

  const alignContent = document.getElementById('alignContent');
  if (alignContent) {
    alignContent.addEventListener('change', (e) => {
      document.querySelector('#alignContentVisualizer .flex-container'
      ).style.alignContent = e.target.value;
    });
  }

  // Get the range input and animate button
  const rangeInput = document.getElementById('container-width');
  const animateButton = document.getElementById('animate-width');

  // Function to update the width of the flex containers
  function updateWidth(value){
    document.querySelectorAll('.flex-container').forEach(container => {
      container.style.width = value + 'px';
    });
  }

  if (rangeInput) {
    // Event listener for the range input
    rangeInput.addEventListener('input', (e) => {
      updateWidth(e.target.value);
    });
  }

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

  if (animateButton) {
    // Event listener for the animate button
    animateButton.addEventListener('click', animateWidth);
  }
  const stopAnimationButton = document.getElementById('stop-animate-width');
  // Event listener for the stop animation button
  if (stopAnimationButton) {
    stopAnimationButton.addEventListener('click', () => {
      document.querySelectorAll('.flex-container').forEach(container => {
        container.classList.remove('animate-width');

      });
    });
  }

});
