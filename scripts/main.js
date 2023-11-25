function getBaseURL() {
  // Check if running on GitHub Pages
  if (window.location.hostname === 'fahdi.github.io') {
    return '/css-visual-learner/';
  } else {
    // Return an empty string if running locally or on a different host
    return '';
  }
}

function loadSidebar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('sidebar').innerHTML = this.responseText;
    }
  };
  // Use the base URL to construct the correct path
  xhr.open('GET', getBaseURL() + 'sidebar.html', true);
  xhr.send();
}

// Load the sidebar when the page loads
window.onload = loadSidebar;

function toggleSidebar() {
  const sidebar = document.getElementById("main-sidebar");
  if (sidebar.style.transform === "translateX(0px)") {
    sidebar.style.transform = "translateX(-100%)";
  } else {
    sidebar.style.transform = "translateX(0px)";
  }
}
