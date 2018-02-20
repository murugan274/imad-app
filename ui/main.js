//counter code
var button = document.getElementById('counter');
var counter =0;
button.onclick = function () {
    
    //make are quest to the counter point
    
    //capture the response and store int in a variable
    
    //Render the variable in the correct span
    counter = counter +1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}
//console.log('Loaded!');
//change the text of main tesx of div
//var element = document.getElementById('main-text');
//element.innerHTML = 'New Value';

// move the image
//var img = document.getElementById('madi');
//var marginLeft = 0;
//function moveRight () {
  //  marginLeft = marginLeft + 1;
//    img.style.marginLeft = marginLeft + 'px';
//}
//img.onclick = function () {
 //   var interval = setInterval(moveRight, 50);
 // img.style.marginLeft = '100px';
//};
