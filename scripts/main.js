function getBaseURL(){
  // Check if running on GitHub Pages
  if (window.location.hostname === 'fahdi.github.io') {
    return '/css-visual-learner/';
  } else {
    // Return an empty string if running locally or on a different host
    return '';
  }
}

function loadSidebar(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
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

function toggleSidebar(){
  const sidebar = document.getElementById('main-sidebar');
  if (sidebar.style.transform === 'translateX(0px)') {
    sidebar.style.transform = 'translateX(-100%)';
  } else {
    sidebar.style.transform = 'translateX(0px)';
  }
}

function getRandomColor(){
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function invertColor(hex){
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);

  // Calculate the luminance of the color.
  var luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Invert the color based on luminance.
  r = Math.round(255 - r);
  g = Math.round(255 - g);
  b = Math.round(255 - b);

  // If the color is very light, make the inverted color darker, and vice versa.
  if (luminance > 180) {
    r *= 0.8;
    g *= 0.8;
    b *= 0.8;
  } else {
    r += (255 - r) * 0.8;
    g += (255 - g) * 0.8;
    b += (255 - b) * 0.8;
  }

  return '#' + padZero(r.toString(16)) + padZero(g.toString(16)) + padZero(b.toString(16));
}

function padZero(str, len){
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}