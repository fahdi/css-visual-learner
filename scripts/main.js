function loadSidebar(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('sidebar').innerHTML = this.responseText;
    }
  };
  xhr.open('GET', '../sidebar.html', true);
  xhr.send();
}

// Load the sidebar when the page loads
window.onload = loadSidebar;
