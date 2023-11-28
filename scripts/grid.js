document.addEventListener('DOMContentLoaded', function(){
  const gridTemplateColumnsInput = document.getElementById('gridTemplateColumns');
  const gridTemplateRowsInput = document.getElementById('gridTemplateRows');
  const gridColumnGapInput = document.getElementById('gridColumnGap');
  const gridRowGapInput = document.getElementById('gridRowGap');
  const gridContainer = document.querySelector('.grid-container');
  const codeDisplayer = document.querySelector('#csscode p')
  const CopyStyleButton = document.querySelector('#csscode button')
  const NoOfContainers = document.querySelector('.controls input')
  function applyStyles(){
    var css = gridContainer.style.cssText = `
        grid-template-columns: ${gridTemplateColumnsInput.value};
        grid-template-rows: ${gridTemplateRowsInput.value};
        column-gap: ${gridColumnGapInput.value};
        row-gap: ${gridRowGapInput.value};
      `;
    codeDisplayer.textContent = css
  }
  function copycss(){
    navigator.clipboard.writeText(gridContainer.style.cssText)
  }

  // Event listeners for input changes
  gridTemplateColumnsInput.addEventListener('input', applyStyles);
  gridTemplateRowsInput.addEventListener('input', applyStyles);
  gridColumnGapInput.addEventListener('input', applyStyles);
  gridRowGapInput.addEventListener('input', applyStyles);
  NoOfContainers.addEventListener('input',() => {
    gridContainer.innerHTML = ''
    for (let i = 1; i < parseInt(NoOfContainers.value)+1; i++) {
      gridContainer.innerHTML+=`
      <div class="grid-item">${i}</div>
      
      `
    }
  })
  CopyStyleButton.addEventListener('click',copycss)
});
  