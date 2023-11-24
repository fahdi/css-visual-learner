var controls = document.querySelectorAll('form input, form select');

function updateFilters() {

//grab the data-unit value from the input
var unit = this.dataset.unit || '';

//to update the CSS variables
var varToSet = "--" + this.name;
var valueToSet = this.value + unit;
document.documentElement.style.setProperty(varToSet, valueToSet);

//display the value in a tooltip on the controls
this.title = this.value + unit;
}

//listen for changes on the controls
controls.forEach(function(input) {
input.addEventListener('change', updateFilters);
input.addEventListener('mousemove', updateFilters);
});