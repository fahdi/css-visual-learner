// CSS Box Model Visualizer JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Load sidebar
    loadSidebar();

    // Get control elements
    const marginControl = document.getElementById('margin-control');
    const borderControl = document.getElementById('border-control');
    const paddingControl = document.getElementById('padding-control');
    const contentWidthControl = document.getElementById('content-width');
    const contentHeightControl = document.getElementById('content-height');
    const boxSizingControl = document.getElementById('box-sizing-control');

    // Get value display elements
    const marginValue = document.getElementById('margin-value');
    const borderValue = document.getElementById('border-value');
    const paddingValue = document.getElementById('padding-value');
    const widthValue = document.getElementById('width-value');
    const heightValue = document.getElementById('height-value');

    // Get box model areas
    const marginArea = document.getElementById('margin-area');
    const borderArea = document.getElementById('border-area');
    const paddingArea = document.getElementById('padding-area');
    const contentArea = document.getElementById('content-area');
    const contentDimensions = document.getElementById('content-dimensions');

    // Get dimension calculation displays
    const calcContent = document.getElementById('calc-content');
    const calcPadding = document.getElementById('calc-padding');
    const calcBorder = document.getElementById('calc-border');
    const calcTotal = document.getElementById('calc-total');

    const cssRuleDisplay = document.getElementById('css-rule-display');

    // Helper function for smooth CSS display updates
    function updateCSSDisplay(content) {
        cssRuleDisplay.classList.add('updating');
        setTimeout(() => {
            cssRuleDisplay.innerHTML = `<pre>${content}</pre>`;
            cssRuleDisplay.classList.remove('updating');
        }, 100);
    }

    // Update box model dimensions
    function updateBoxModel() {
        const margin = parseInt(marginControl.value);
        const border = parseInt(borderControl.value);
        const padding = parseInt(paddingControl.value);
        const width = parseInt(contentWidthControl.value);
        const height = parseInt(contentHeightControl.value);
        const boxSizing = boxSizingControl.value;

        // Update value displays
        marginValue.textContent = `${margin}px`;
        borderValue.textContent = `${border}px`;
        paddingValue.textContent = `${padding}px`;
        widthValue.textContent = `${width}px`;
        heightValue.textContent = `${height}px`;

        // Update box model areas
        marginArea.style.padding = `${margin}px`;
        borderArea.style.borderWidth = `${border}px`;
        paddingArea.style.padding = `${padding}px`;
        
        // Update content area based on box-sizing
        if (boxSizing === 'border-box') {
            contentArea.style.width = `${width}px`;
            contentArea.style.height = `${height}px`;
            contentArea.style.boxSizing = 'border-box';
            contentArea.style.padding = `${padding}px`;
            contentArea.style.border = `${border}px solid var(--border-color)`;
        } else {
            contentArea.style.width = `${width}px`;
            contentArea.style.height = `${height}px`;
            contentArea.style.boxSizing = 'content-box';
            contentArea.style.padding = '0';
            contentArea.style.border = 'none';
        }

        // Update content dimensions display
        contentDimensions.textContent = `${width}×${height}`;

        // Calculate and update dimensions
        updateDimensionCalculations(margin, border, padding, width, height, boxSizing);

        // Update comparison demos
        updateComparisonDemos(padding, border);
    }

    // Calculate and display dimensions
    function updateDimensionCalculations(margin, border, padding, width, height, boxSizing) {
        let contentW, contentH, paddingW, paddingH, borderW, borderH, totalW, totalH;

        if (boxSizing === 'border-box') {
            // In border-box, width/height include padding and border
            const availableWidth = width - (padding * 2) - (border * 2);
            const availableHeight = height - (padding * 2) - (border * 2);
            
            contentW = Math.max(0, availableWidth);
            contentH = Math.max(0, availableHeight);
            paddingW = width - (border * 2);
            paddingH = height - (border * 2);
            borderW = width;
            borderH = height;
            totalW = width + (margin * 2);
            totalH = height + (margin * 2);
        } else {
            // In content-box, width/height apply only to content
            contentW = width;
            contentH = height;
            paddingW = width + (padding * 2);
            paddingH = height + (padding * 2);
            borderW = paddingW + (border * 2);
            borderH = paddingH + (border * 2);
            totalW = borderW + (margin * 2);
            totalH = borderH + (margin * 2);
        }

        calcContent.textContent = `${contentW}×${contentH}px`;
        calcPadding.textContent = `${paddingW}×${paddingH}px`;
        calcBorder.textContent = `${borderW}×${borderH}px`;
        calcTotal.textContent = `${totalW}×${totalH}px`;
    }

    // Update comparison demos
    function updateComparisonDemos(padding, border) {
        const contentBoxDemo = document.querySelector('.content-box-demo');
        const borderBoxDemo = document.querySelector('.border-box-demo');
        
        if (contentBoxDemo) {
            contentBoxDemo.style.padding = `${padding}px`;
            contentBoxDemo.style.borderWidth = `${border}px`;
        }
        
        if (borderBoxDemo) {
            borderBoxDemo.style.padding = `${padding}px`;
            borderBoxDemo.style.borderWidth = `${border}px`;
        }
    }

    // Display CSS rule for specific area
    function displayAreaRule(area) {
        const margin = parseInt(marginControl.value);
        const border = parseInt(borderControl.value);
        const padding = parseInt(paddingControl.value);
        const width = parseInt(contentWidthControl.value);
        const height = parseInt(contentHeightControl.value);
        const boxSizing = boxSizingControl.value;

        let css = '';
        
        switch(area) {
            case 'margin':
                css = `/* Margin creates space OUTSIDE the element */
.element {
    margin: ${margin}px;
    /* Separates this element from other elements */
    /* Margins can collapse between adjacent elements */
}`;
                break;
                
            case 'border':
                css = `/* Border creates a visible edge around padding and content */
.element {
    border: ${border}px solid #f39c12;
    /* Border contributes to total element size */
    /* Can have different styles: solid, dashed, dotted */
}`;
                break;
                
            case 'padding':
                css = `/* Padding creates space INSIDE the element */
.element {
    padding: ${padding}px;
    /* Creates space between content and border */
    /* Padding inherits background color */
}`;
                break;
                
            case 'content':
                css = `/* Content area contains the actual content */
.element {
    width: ${width}px;
    height: ${height}px;
    box-sizing: ${boxSizing};
    
    /* ${boxSizing === 'border-box' ? 
        'Width includes padding and border' : 
        'Width applies to content only'} */
}`;
                break;
        }

        updateCSSDisplay(css);
    }

    // Display box sizing comparison
    function displayBoxSizingRule() {
        const css = `/* Box Sizing Controls How Width/Height Are Applied */

/* content-box (default): */
.content-box {
    width: 200px;           /* Content width only */
    padding: 20px;          /* Adds to total width */
    border: 5px solid;      /* Adds to total width */
    /* Total width = 200 + 40 + 10 = 250px */
}

/* border-box: */
.border-box {
    width: 200px;           /* Total width including padding & border */
    padding: 20px;          /* Included in 200px */
    border: 5px solid;      /* Included in 200px */
    box-sizing: border-box; /* Changes calculation method */
    /* Total width = exactly 200px */
}`;

        updateCSSDisplay(css);
    }

    // Event listeners for controls
    [marginControl, borderControl, paddingControl, contentWidthControl, contentHeightControl, boxSizingControl].forEach(control => {
        control.addEventListener('input', updateBoxModel);
        control.addEventListener('change', updateBoxModel);
    });

    // Event listeners for box model areas
    marginArea.addEventListener('mouseenter', () => displayAreaRule('margin'));
    borderArea.addEventListener('mouseenter', () => displayAreaRule('border'));
    paddingArea.addEventListener('mouseenter', () => displayAreaRule('padding'));
    contentArea.addEventListener('mouseenter', () => displayAreaRule('content'));

    // Event listeners for comparison demos
    const comparisonDemos = document.querySelectorAll('.comparison-demo');
    comparisonDemos.forEach(demo => {
        demo.addEventListener('mouseenter', displayBoxSizingRule);
    });

    // Reset display on mouse leave
    [...document.querySelectorAll('.margin-area, .border-area, .padding-area, .content-area, .comparison-demo')].forEach(element => {
        element.addEventListener('mouseleave', () => {
            updateCSSDisplay('Adjust the controls below to see the CSS Box Model in action!');
        });
    });

    // Initialize
    updateBoxModel();

    // Show introduction message
    setTimeout(() => {
        const intro = `/* CSS Box Model - Every element has four areas:

   📦 Content Area - where text and images appear
   🟢 Padding - space inside the element around content  
   🟡 Border - line around the padding and content
   🔴 Margin - space outside the element
   
   Try adjusting the controls and hovering over each area! */`;
        updateCSSDisplay(intro);
    }, 1000);

    // Export for potential use in other scripts
    window.boxModelDemo = {
        updateBoxModel,
        displayAreaRule,
        displayBoxSizingRule
    };
});