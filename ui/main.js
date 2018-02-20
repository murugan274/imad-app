//counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
    //create a request object
    var request =  XMLHttpRequest();
    
    //capture the response and store int in a variable
    request.onreadystatechange = function () {
    if (request.readystate === XMLHttpRequest.Done) {
        //take action
        if (request.status === 200) {
        var counter = request-responseText;
        var span = document.getElementById('count');
        span.innerHTML = counter.toString();
        }
    }
    //not done yet
};
    //make the request
    request.open('GET', 'http://muruganitec.itec.imad.hasura-app.io/counter', true);
    request.send(null);
};
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
