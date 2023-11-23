document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('flexDirection').addEventListener('change', function(e){
    document.querySelector('.flex-container').style.flexDirection = e.target.value;
  });
});

// Add similar event listeners for other Flexbox properties
