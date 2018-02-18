console.log('Loaded!');
// move the image
var img = document.getElementById('madi'); 
var marginLeft =0;
img.onclick = function() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = MarginLeft + 'px';
  var interval = setInterval (moveRight, 100); 
};