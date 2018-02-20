var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = { 
'article-one' : {
    title: 'Article One | Murugan Mani',
    heading: 'Article One',
    date: 'Feb 18 2018',
    content: ` <p>
                    This is my first article. I would like to Tanmani Gopal the instructor for this wonderful opportunity.
                </p>
            <p>
                Great work.
                </p>    `
},
'article-two' : {
     title: 'Article Two | Murugan Mani',
    heading: 'Article Two',
    date: 'Feb 19 2018',
    content: ` <p>
                    This is my Second article. I would like to Tanmani Gopal the instructor for this wonderful opportunity.
                </p>
            <p>
                Great work.
                </p>    `
}
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmlTemplate =`<html>
    <head>
        <title>
            ${title}
        </title>
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <Div Class="container">
        <div>
            <a href="/">Home</a>
        </div>  
        <hr/>
        <h1>
        ${heading}
        </h1>
        <div>
    ${date}
        </div>        
        <div>
  ${content}             
        </div>
        </Div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var counter =0;
app.get('/counter', function (req, res) {
    counter = counter +1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req,res){
    //articleName = article-one
    //articles[articleName] = {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
