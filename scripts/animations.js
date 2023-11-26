// document onload event
document.addEventListener('DOMContentLoaded', function(){
  if (window.location.pathname !== '/animations.html') {
    return;
  }

  console.log('animations.js loaded');

  const applyAnimation = document.getElementById('apply-animation');
  if (applyAnimation) {

    applyAnimation.addEventListener('click', function(){
      let animationBox = document.querySelector('.animation-box');
      animationBox.style.backgroundColor = getRandomColor();
      let animationName = document.getElementById('animation-name').value;
      let duration = document.getElementById('duration').value;
      let timingFunction = document.getElementById('timing-function').value;
      let delay = document.getElementById('delay').value;
      let iterationCount = document.getElementById('iteration-count').value;

      animationBox.style.animation = `${animationName} ${duration}s ${timingFunction} ${delay}s ${iterationCount}`;

      animationBox.addEventListener('animationend', function(){
        animationBox.style.animation = '';
      }, { once: true }); // The listener will be removed after it executes once
    });
  }

  const applyAnimationReverse = document.getElementById('apply-animation-reverse');
  if (applyAnimationReverse) {
    applyAnimationReverse.addEventListener('click', function() {
      let animationBox = document.querySelector('.animation-box');
      let animationName = document.getElementById('animation-name').value;
      let duration = document.getElementById('duration').value;
      let timingFunction = document.getElementById('timing-function').value;
      let delay = document.getElementById('delay').value;
      let iterationCount = document.getElementById('iteration-count').value;

      // Apply the reverse animation
      animationBox.style.animation = `${animationName} ${duration}s ${timingFunction} ${delay}s ${iterationCount} reverse`;

      // Reset animation style when animation ends
      animationBox.addEventListener('animationend', function() {
        animationBox.style.animation = '';
      }, { once: true }); // The listener will be removed after it executes once
    });
  }

  const resetAnimation = document.getElementById('reset-animation');
  if (resetAnimation) {
    resetAnimation.addEventListener('click', function(){
      let animationBox = document.querySelector('.animation-box');
      animationBox.style.animation = '';
    });
  }

});