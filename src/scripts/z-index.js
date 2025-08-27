// Z-Index Visualizer JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Load sidebar
    loadSidebar();

    // Get control elements
    const box1Slider = document.getElementById('box1-zindex');
    const box2Slider = document.getElementById('box2-zindex');
    const box3Slider = document.getElementById('box3-zindex');
    const box4Slider = document.getElementById('box4-zindex');

    const box1Value = document.getElementById('box1-value');
    const box2Value = document.getElementById('box2-value');
    const box3Value = document.getElementById('box3-value');
    const box4Value = document.getElementById('box4-value');

    const cssRuleDisplay = document.getElementById('css-rule-display');

    // Get box elements
    const boxBlue = document.querySelector('.box-blue');
    const boxRed = document.querySelector('.box-red');
    const boxGreen = document.querySelector('.box-green');
    const boxPurple = document.querySelector('.box-purple');

    const boxes = [boxBlue, boxRed, boxGreen, boxPurple];
    const sliders = [box1Slider, box2Slider, box3Slider, box4Slider];
    const values = [box1Value, box2Value, box3Value, box4Value];

    // Helper function for smooth CSS display updates
    function updateCSSDisplay(content) {
        cssRuleDisplay.classList.add('updating');
        setTimeout(() => {
            cssRuleDisplay.innerHTML = `<pre>${content}</pre>`;
            cssRuleDisplay.classList.remove('updating');
        }, 100);
    }

    // Update z-index and display value
    function updateZIndex(box, slider, valueSpan, zIndex) {
        box.style.zIndex = zIndex;
        valueSpan.textContent = zIndex;
        
        // Update z-value in box label
        const zValueSpan = box.querySelector('.z-value');
        if (zValueSpan) {
            zValueSpan.textContent = zIndex;
        }
        
        // Update data attribute
        box.setAttribute('data-zindex', zIndex);
    }

    // Display CSS rule for specific element
    function displayZIndexRule(element) {
        const name = element.getAttribute('data-name') || 'Element';
        const zIndex = element.getAttribute('data-zindex') || element.style.zIndex || 'auto';
        const className = element.className.split(' ')[1]; // Get color class

        const css = `/* Z-Index controls stacking order of positioned elements */
.${className} {
    position: absolute;
    z-index: ${zIndex};
    /* Higher values appear in front of lower values */
}

/* Current stacking order (highest to lowest): */
${getCurrentStackingOrder()}`;

        updateCSSDisplay(css);
    }

    // Get current stacking order
    function getCurrentStackingOrder() {
        const boxData = boxes.map(box => ({
            name: box.getAttribute('data-name'),
            zIndex: parseInt(box.style.zIndex || box.getAttribute('data-zindex')),
            className: box.className.split(' ')[1]
        }));

        // Sort by z-index descending
        boxData.sort((a, b) => b.zIndex - a.zIndex);

        return boxData.map((box, index) => 
            `/* ${index + 1}. ${box.name}: z-index ${box.zIndex} */`
        ).join('\n');
    }

    // Display stacking context rule
    function displayStackingContextRule(concept) {
        let css = '';
        let explanation = '';

        switch(concept) {
            case 'transform':
                explanation = '/* Transform creates a new stacking context */';
                css = `.transform-context {
    transform: translateX(0); /* Creates stacking context */
    z-index: 0;
}

.context-child {
    z-index: 999; /* Cannot escape parent's stacking context */
}

.context-sibling {
    z-index: 1; /* In a different stacking context */
}

/* Result: Child (z:999) stays within parent context,
   sibling (z:1) can appear above parent (z:0) */`;
                break;

            case 'opacity':
                explanation = '/* Opacity < 1 creates a new stacking context */';
                css = `.opacity-context {
    opacity: 0.9; /* Creates stacking context */
}

.context-child {
    z-index: 999; /* Confined to parent's context */
}

/* Opacity, filters, masks, and many other properties
   create stacking contexts automatically */`;
                break;

            case 'position':
                explanation = '/* Positioned element + z-index creates stacking context */';
                css = `.position-context {
    position: relative; /* or absolute, fixed, sticky */
    z-index: 0; /* Creates stacking context */
}

/* Without z-index, positioned elements don't create
   stacking contexts automatically */`;
                break;
        }

        const fullCSS = `${explanation}\n\n${css}`;
        updateCSSDisplay(fullCSS);
    }

    // Event listeners for sliders
    sliders.forEach((slider, index) => {
        slider.addEventListener('input', function(e) {
            const zIndex = e.target.value;
            updateZIndex(boxes[index], slider, values[index], zIndex);
        });
    });

    // Event listeners for z-index boxes
    boxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            displayZIndexRule(this);
        });

        box.addEventListener('mouseleave', function() {
            updateCSSDisplay('Hover over elements or adjust controls to see z-index in action!');
        });
    });

    // Event listeners for stacking context examples
    const exampleCards = document.querySelectorAll('.example-card');
    exampleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const concept = this.getAttribute('data-concept');
            displayStackingContextRule(concept);
        });

        card.addEventListener('mouseleave', function() {
            updateCSSDisplay('Hover over elements or adjust controls to see z-index in action!');
        });
    });

    // Event listeners for negative z-index demo
    const negativeBox = document.querySelector('.negative-box');
    const positiveBox = document.querySelector('.positive-box');

    if (negativeBox) {
        negativeBox.addEventListener('mouseenter', function() {
            const css = `/* Negative z-index places elements behind their parent */
.negative-box {
    position: absolute;
    z-index: -1; /* Behind the background layer */
}

.background-layer {
    position: relative;
    z-index: 0; /* Default stacking level */
}

/* Negative z-index is useful for background decorations
   that should appear behind content but above the page background */`;
            updateCSSDisplay(css);
        });

        negativeBox.addEventListener('mouseleave', function() {
            updateCSSDisplay('Hover over elements or adjust controls to see z-index in action!');
        });
    }

    if (positiveBox) {
        positiveBox.addEventListener('mouseenter', function() {
            const css = `/* Positive z-index places elements above their parent */
.positive-box {
    position: absolute;
    z-index: 1; /* Above the background layer */
}

.background-layer {
    position: relative;
    z-index: 0; /* Default stacking level */
}

/* Higher positive values create more prominent layers */`;
            updateCSSDisplay(css);
        });

        positiveBox.addEventListener('mouseleave', function() {
            updateCSSDisplay('Hover over elements or adjust controls to see z-index in action!');
        });
    }

    // Initialize display
    sliders.forEach((slider, index) => {
        values[index].textContent = slider.value;
        updateZIndex(boxes[index], slider, values[index], slider.value);
    });

    // Show introduction message
    setTimeout(() => {
        const intro = `/* Z-Index controls the stacking order of positioned elements:

   • Only works on positioned elements (relative, absolute, fixed, sticky)
   • Higher values appear in front of lower values
   • Stacking contexts isolate z-index values
   • Children cannot escape their parent's stacking context
   
   Try adjusting the sliders and hovering over elements! */`;
        updateCSSDisplay(intro);
    }, 1000);

    // Export for potential use in other scripts
    window.zIndexDemo = {
        updateZIndex: updateZIndex,
        displayRule: displayZIndexRule,
        getCurrentOrder: getCurrentStackingOrder
    };
});