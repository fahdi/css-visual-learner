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

});

// Add similar event listeners for other Flexbox properties
