// CSS Variables Visualizer JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Load sidebar
    loadSidebar();

    // Get control elements
    const primaryColorInput = document.getElementById('primary-color');
    const secondaryColorInput = document.getElementById('secondary-color');
    const spacingInput = document.getElementById('spacing');
    const spacingValue = document.getElementById('spacing-value');
    const cssRuleDisplay = document.getElementById('css-rule-display');
    const variableElements = document.querySelectorAll('.variable-element');

    // Update CSS custom properties
    function updateCSSVariable(property, value) {
        document.documentElement.style.setProperty(property, value);
    }

    // Update spacing value display
    function updateSpacingDisplay(value) {
        spacingValue.textContent = `${value}px`;
    }

    // Helper function for smooth CSS display updates
    function updateCSSDisplay(css) {
        cssRuleDisplay.classList.add('updating');
        setTimeout(() => {
            cssRuleDisplay.innerHTML = `<pre>${css}</pre>`;
            cssRuleDisplay.classList.remove('updating');
        }, 100);
    }

    // Display CSS rules with smooth transition
    function displayCSSRule(element, variables) {
        const elementClass = element.className.split(' ').find(cls => cls !== 'variable-element') || 'element';
        
        let css = `.${elementClass} {\n`;
        variables.forEach(variable => {
            const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
            if (variable.includes('calc(')) {
                css += `    padding: ${variable};\n`;
            } else if (variable === '--spacing') {
                css += `    padding: var(${variable}); /* ${value} */\n`;
            } else if (variable === '--primary-color' || variable === '--secondary-color') {
                css += `    background: var(${variable}); /* ${value} */\n`;
            } else {
                css += `    /* Uses var(${variable}) */\n`;
            }
        });
        css += '}';

        // Add smooth transition effect
        cssRuleDisplay.classList.add('updating');
        setTimeout(() => {
            cssRuleDisplay.innerHTML = `<pre>${css}</pre>`;
            cssRuleDisplay.classList.remove('updating');
        }, 100);
    }

    // Event listeners for controls
    primaryColorInput.addEventListener('input', function(e) {
        updateCSSVariable('--primary-color', e.target.value);
    });

    secondaryColorInput.addEventListener('input', function(e) {
        updateCSSVariable('--secondary-color', e.target.value);
    });

    spacingInput.addEventListener('input', function(e) {
        const value = e.target.value;
        updateCSSVariable('--spacing', `${value}px`);
        updateSpacingDisplay(value);
    });

    // Add hover effects for elements
    variableElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const cssData = this.getAttribute('data-css');
            
            if (cssData) {
                const variables = cssData.split(', ').map(v => v.trim());
                
                // Special cases for different demonstrations
                if (cssData.includes('inherit variables')) {
                    const css = `.inherited-box {\n    --inherited-color: var(--secondary-color);\n    background: color-mix(in srgb, var(--inherited-color) 20%, white);\n}\n\n.child-element {\n    background: var(--inherited-color); /* Inherits parent's value */\n    color: white;\n}`;
                    updateCSSDisplay(css);
                } else if (cssData.includes('local scope override')) {
                    const css = `.local-scope {\n    --primary-color: #9b59b6; /* Local override */\n    background: var(--primary-color);\n    /* This overrides the global --primary-color */\n}`;
                    updateCSSDisplay(css);
                } else if (cssData.includes('--undefined-var')) {
                    const css = `.fallback-box {\n    background: var(--undefined-var, #95a5a6);\n    /* Uses fallback value #95a5a6 when --undefined-var is not defined */\n    border: 2px solid var(--undefined-var, #7f8c8d);\n}`;
                    updateCSSDisplay(css);
                } else if (cssData.includes('calc(')) {
                    const css = `.calc-box {\n    padding: calc(var(--spacing) * 2);\n    border: calc(var(--spacing) / 4) solid var(--primary-color);\n    /* Mathematical operations with CSS variables */\n}`;
                    updateCSSDisplay(css);
                } else {
                    displayCSSRule(this, variables);
                }
            }
        });

        element.addEventListener('mouseleave', function() {
            updateCSSDisplay('Hover over the elements below to see CSS variables in action!');
        });
    });

    // Initialize display
    updateSpacingDisplay(spacingInput.value);

    // Show introduction message
    setTimeout(() => {
        const intro = `/* CSS Custom Properties (Variables) allow you to:
   - Store reusable values
   - Create dynamic themes
   - Perform calculations
   - Inherit values from parent elements
   - Provide fallback values
   
   Try changing the controls above to see live updates! */`;
        cssRuleDisplay.innerHTML = `<pre>${intro}</pre>`;
    }, 1000);
});

// Utility function to demonstrate variable inheritance
function demonstrateInheritance() {
    const inheritedBox = document.querySelector('.inherited-box');
    if (inheritedBox) {
        // Temporarily change the inherited color to show the effect
        inheritedBox.style.setProperty('--inherited-color', '#e67e22');
        setTimeout(() => {
            inheritedBox.style.removeProperty('--inherited-color');
        }, 2000);
    }
}

// Export for potential use in other scripts
window.cssVariablesDemo = {
    updateVariable: updateCSSVariable,
    demonstrateInheritance: demonstrateInheritance
};