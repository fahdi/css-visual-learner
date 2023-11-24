document.addEventListener('DOMContentLoaded', function(){
  const gridTemplateColumnsInput = document.getElementById('gridTemplateColumns');
  const gridTemplateRowsInput = document.getElementById('gridTemplateRows');
  const gridColumnGapInput = document.getElementById('gridColumnGap');
  const gridRowGapInput = document.getElementById('gridRowGap');
  const gridContainer = document.querySelector('.grid-container');

  function applyStyles(){
    gridContainer.style.cssText = `
        grid-template-columns: ${gridTemplateColumnsInput.value};
        grid-template-rows: ${gridTemplateRowsInput.value};
        column-gap: ${gridColumnGapInput.value};
        row-gap: ${gridRowGapInput.value};
      `;
  }

  // Event listeners for input changes
  gridTemplateColumnsInput.addEventListener('input', applyStyles);
  gridTemplateRowsInput.addEventListener('input', applyStyles);
  gridColumnGapInput.addEventListener('input', applyStyles);
  gridRowGapInput.addEventListener('input', applyStyles);
});
  