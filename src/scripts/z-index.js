document.addEventListener('DOMContentLoaded', function () {
    // Get the select elements
    var box1Select = document.getElementById('box1-zindex');
    var box2Select = document.getElementById('box2-zindex');
    var box3Select = document.getElementById('box3-zindex');
    var box4Select = document.getElementById('box4-zindex');

    // Get the box elements
    var box1 = document.querySelector('.box1');
    var box2 = document.querySelector('.box2');
    var box3 = document.querySelector('.box3');
    var box4 = document.querySelector('.box4');

    // Function to update z-index based on selected option
    function updateZIndex(element, zIndex) {
        element.style.zIndex = zIndex;
    }

    // Event listeners for changes in the dropdowns
    box1Select.addEventListener('change', function () {
        updateZIndex(box1, box1Select.value);
    });

    box2Select.addEventListener('change', function () {
        updateZIndex(box2, box2Select.value);
    });

    box3Select.addEventListener('change', function () {
        updateZIndex(box3, box3Select.value);
    });

    box4Select.addEventListener('change', function () {
        updateZIndex(box4, box4Select.value);
    });
});
