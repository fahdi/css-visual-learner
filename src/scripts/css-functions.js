// CSS Functions Visualizer JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Load sidebar
    loadSidebar();

    // Get control elements
    const baseSizeInput = document.getElementById('base-size');
    const viewportFactorInput = document.getElementById('viewport-factor');
    const multiplierInput = document.getElementById('multiplier');
    
    const baseSizeValue = document.getElementById('base-size-value');
    const viewportFactorValue = document.getElementById('viewport-factor-value');
    const multiplierValue = document.getElementById('multiplier-value');
    
    const cssRuleDisplay = document.getElementById('css-rule-display');
    const functionElements = document.querySelectorAll('.function-element');
    
    const viewportWidth = document.getElementById('viewport-width');
    const viewportHeight = document.getElementById('viewport-height');

    // Update CSS custom properties
    function updateCSSVariable(property, value) {
        document.documentElement.style.setProperty(property, value);
    }

    // Update viewport display
    function updateViewportDisplay() {
        viewportWidth.textContent = window.innerWidth + 'px';
        viewportHeight.textContent = window.innerHeight + 'px';
    }

    // Helper function for smooth CSS display updates
    function updateCSSDisplay(content) {
        cssRuleDisplay.classList.add('updating');
        setTimeout(() => {
            cssRuleDisplay.innerHTML = `<pre>${content}</pre>`;
            cssRuleDisplay.classList.remove('updating');
        }, 100);
    }

    // Display CSS rules based on function type and element
    function displayFunctionRule(element, functionType) {
        const elementClass = element.className.split(' ').find(cls => 
            cls !== 'function-element' && cls !== 'interactive-element'
        ) || 'element';
        
        let css = '';
        let explanation = '';
        
        switch(functionType) {
            case 'calc':
                css = getFunctionCSS(elementClass, element);
                explanation = '/* calc() performs mathematical calculations */';
                break;
                
            case 'min':
                css = getFunctionCSS(elementClass, element);
                explanation = '/* min() returns the smallest value from a list */';
                break;
                
            case 'max':
                css = getFunctionCSS(elementClass, element);
                explanation = '/* max() returns the largest value from a list */';
                break;
                
            case 'clamp':
                css = getFunctionCSS(elementClass, element);
                explanation = '/* clamp(min, preferred, max) constrains a value between bounds */';
                break;
                
            case 'combined':
                css = getFunctionCSS(elementClass, element);
                explanation = '/* Functions can be nested and combined for complex layouts */';
                break;
        }
        
        const fullCSS = `${explanation}\n.${elementClass} {\n${css}\n}`;
        updateCSSDisplay(fullCSS);
    }

    // Get specific CSS for each function element
    function getFunctionCSS(elementClass, element) {
        const computedStyle = window.getComputedStyle(element);
        
        switch(elementClass) {
            case 'calc-addition':
                return '    width: calc(var(--base-size) + 2rem);\n    /* Adds base size + 2rem */';
                
            case 'calc-subtraction':
                return '    width: calc(100% - 30px);\n    /* Full width minus 30px for margins */';
                
            case 'calc-multiplication':
                return '    font-size: calc(1rem * var(--multiplier));\n    /* Scales font size by multiplier */';
                
            case 'calc-division':
                return '    width: calc(100vw / 4);\n    max-width: 400px;\n    /* Quarter of viewport width, capped at 400px */';
                
            case 'calc-complex':
                return '    width: calc((100% - 40px) / 3 + 10px);\n    /* Complex calculation with parentheses */';
                
            case 'min-basic':
                return '    width: min(300px, 50vw);\n    /* Smaller of 300px or 50% viewport width */';
                
            case 'min-multiple':
                return '    width: min(200px, 30vw, 50%);\n    /* Smallest of three values */';
                
            case 'min-with-calc':
                return '    width: min(calc(100% - 20px), 400px);\n    /* Combines min() with calc() */';
                
            case 'min-responsive':
                return '    width: min(80vw, 600px);\n    /* Responsive width with maximum */';
                
            case 'max-basic':
                return '    width: max(200px, 20vw);\n    /* Larger of 200px or 20% viewport width */';
                
            case 'max-multiple':
                return '    width: max(100px, 10vw, 25%);\n    /* Largest of three values */';
                
            case 'max-with-calc':
                return '    width: max(calc(50% + 10px), 150px);\n    /* Combines max() with calc() */';
                
            case 'max-responsive':
                return '    width: max(50vw, 300px);\n    /* Responsive width with minimum */';
                
            case 'clamp-basic':
                return '    width: clamp(100px, 25vw, 300px);\n    /* Min: 100px, Preferred: 25vw, Max: 300px */';
                
            case 'clamp-font':
                return '    font-size: clamp(1rem, 4vw, 2.5rem);\n    height: clamp(60px, 10vw, 120px);\n    /* Fluid typography and height */';
                
            case 'clamp-with-calc':
                return '    width: clamp(50px, calc(10vw + 1rem), 200px);\n    /* Uses calc() as the preferred value */';
                
            case 'clamp-complex':
                return '    width: clamp(calc(100px + 1rem), 50vw, calc(500px - 2rem));\n    /* All three values use calc() */';
                
            case 'clamp-spacing':
                return '    padding: clamp(1rem, 5vw, 4rem);\n    /* Responsive padding */';
                
            case 'combined-1':
                return '    width: max(min(50vw, 400px), 200px);\n    /* Nested: ensures minimum of 200px */';
                
            case 'combined-2':
                return '    width: clamp(100px, calc(50vw - 2rem), max(300px, 25vw));\n    /* Complex nesting of all functions */';
                
            case 'combined-3':
                return '    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));\n    /* Responsive grid with dynamic columns */';
                
            default:
                const width = computedStyle.width;
                const fontSize = computedStyle.fontSize;
                return `    width: ${width};\n    font-size: ${fontSize};`;
        }
    }

    // Event listeners for controls
    baseSizeInput.addEventListener('input', function(e) {
        const value = e.target.value;
        updateCSSVariable('--base-size', `${value}px`);
        baseSizeValue.textContent = `${value}px`;
    });

    viewportFactorInput.addEventListener('input', function(e) {
        const value = e.target.value;
        updateCSSVariable('--viewport-factor', `${value}vw`);
        viewportFactorValue.textContent = `${value}vw`;
    });

    multiplierInput.addEventListener('input', function(e) {
        const value = e.target.value;
        updateCSSVariable('--multiplier', value);
        multiplierValue.textContent = value;
    });

    // Add hover effects for function elements
    functionElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const functionType = this.getAttribute('data-function');
            displayFunctionRule(this, functionType);
        });

        element.addEventListener('mouseleave', function() {
            updateCSSDisplay('Hover over the elements below to see CSS functions in action!');
        });

        // Add click effect for mobile
        element.addEventListener('click', function() {
            const functionType = this.getAttribute('data-function');
            displayFunctionRule(this, functionType);
        });
    });

    // Window resize handler
    window.addEventListener('resize', debounce(updateViewportDisplay, 100));

    // Initialize display
    updateViewportDisplay();

    // Show introduction message
    setTimeout(() => {
        const intro = `/* CSS Functions enable mathematical operations in CSS:

   calc() - Perform calculations with mixed units
   min()  - Choose the smallest value from a list  
   max()  - Choose the largest value from a list
   clamp() - Constrain a value between minimum and maximum bounds
   
   Try resizing your window and adjusting the controls above! */`;
        cssRuleDisplay.innerHTML = `<pre>${intro}</pre>`;
    }, 1000);

    // Utility function to debounce resize events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Function to demonstrate real-time calculation updates
    function demonstrateRealTimeCalculation() {
        const calcElements = document.querySelectorAll('[class*="calc-"]');
        let index = 0;
        
        const interval = setInterval(() => {
            if (index < calcElements.length) {
                calcElements[index].style.transform = 'scale(1.1)';
                setTimeout(() => {
                    calcElements[index].style.transform = 'scale(1)';
                }, 300);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 500);
    }

    // Export for potential use in other scripts
    window.cssFunctionsDemo = {
        updateVariable: updateCSSVariable,
        demonstrateCalculations: demonstrateRealTimeCalculation,
        updateViewport: updateViewportDisplay
    };
});