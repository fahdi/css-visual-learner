function updateGridItems(){
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = ''; // Clear existing items

  // Add new items to the grid
  for (let i = 0; i < 9; i++) { // Example for 9 items
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = i + 1; // Number the items for clarity
    gridContainer.appendChild(gridItem);
  }
}

document.getElementById('gridColumnsControl').addEventListener('change', (e) => {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.style.gridTemplateColumns = e.target.value;
});

document.getElementById('gridRowsControl').addEventListener('change', function(e){
  document.querySelector('.grid-container').style.gridTemplateRows = e.target.value;
});

document.getElementById('gridGapControl').addEventListener('input', function(e){
  document.querySelector('.grid-container').style.gap = e.target.value + 'px';
});

document.addEventListener('DOMContentLoaded', function(){
  updateGridItems(); // Initial population
});