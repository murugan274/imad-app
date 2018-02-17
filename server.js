var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone = {
    title: 'Article One | Murugan Mani',
    heading: 'Article One',
    date: 'Feb 18 2018',
    Content: ` <p>
                    This is my first article. I would like to Tanmani Gopal the instructor for this wonderful opportunity.
                </p>
            <p>
                Great work.
                </p>    `
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmltemplate =`<html>
    <head>
        <title>
            ${title}
        </title>
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <Div Class="container">
        <div>
            <a href="Home" >
            </a>
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
return createTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one', function (req,res){
    res.send(createTemplate(articleone));
});
app.get('/article-two', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
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
