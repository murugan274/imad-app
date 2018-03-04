//var button = document.getElementById('counter');

//button.onclick = function () {
    
    //create a request object
  //  var request = new XMLHttpRequest();
    
    //capture the response and store int in a variable
//    request.onreadystatechange = function () {
    //if (request.readyState === XMLHttpRequest.DONE) {
  //      //take action
//        if (request.status === 200) {
        //var counter = request.responseText;
      //  var span = document.getElementById('count');
        //span.innerHTML = counter.toString();
    //    }
  //  }
    //not done yet
//};
    //make the request
    //request.open('GET', 'http://muruganitec.imad.hasura-app.io/counter', true);
  //  request.send(null);
//};

//submit username/password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store int in a variable
    request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
        //take action
        if (request.status === 200)
        {
        alert('login successfull');
        }
        else if (request.status === 403)
        {
            alert('password is incorrect');
        }
        else if (request.status === 500) {
            alert('password is incorrect');
        }
    }
    //not done yet
};
    //make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://muruganitec.imad.hasura-app.io/login', true);
    request.setRequestHeader('content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
};
// make a rquest to the server and send the name
//    request.open('GET', 'http://muruganitec.imad.hasura-app.io/counter', true);
 //   request.send(null);
//capture the list of name and render as a list

//};
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
