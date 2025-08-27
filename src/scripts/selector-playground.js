document.addEventListener('DOMContentLoaded', function(){
  var htmlEditor = CodeMirror.fromTextArea(document.getElementById('html-editor'), {
    mode: 'xml',
    lineNumbers: true
  });

  var cssEditor = CodeMirror.fromTextArea(document.getElementById('css-editor'), {
    mode: 'css',
    lineNumbers: true
  });

// Path: scripts/selector-playground.js

  function updatePreview(){
    const htmlContent = htmlEditor.getValue();
    const cssContent = cssEditor.getValue();
    const previewFrame = document.getElementById('live-preview');
    previewFrame.innerHTML = htmlContent;
    const styleTag = document.createElement('style');
    styleTag.innerHTML = cssContent;
    previewFrame.appendChild(styleTag);
  }

  htmlEditor.on('change', updatePreview);
  cssEditor.on('change', updatePreview);
});