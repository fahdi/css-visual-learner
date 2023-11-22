document.querySelectorAll('.interactive-element').forEach(element => {
  element.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'yellow';
    document.getElementById('css-rule-display').innerText = 'background-color: yellow;';
  });

  element.addEventListener('mouseout', function(){
    this.style.backgroundColor = '';
    document.getElementById('css-rule-display').innerText = 'Hover over the boxes below to see CSS effects!';
  });
});
