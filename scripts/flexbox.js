document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("flexDirection")
    .addEventListener("change", function (e) {
      document.querySelector(".flex-container").style.flexDirection =
        e.target.value;
    });
  document
    .getElementById("alignItems")
    .addEventListener("change", function (e) {
      document.querySelector(
        "#alignItemsVisualizer .flex-container"
      ).style.alignItems = e.target.value;
    });
});

// Add similar event listeners for other Flexbox properties
