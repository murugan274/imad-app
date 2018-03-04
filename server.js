var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');

var config = {
    user: 'muruganitec',
    database: 'muruganitec',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
//var articles = { 
//'article-one' : {
//    title: 'Article One | Murugan Mani',
  //  heading: 'Article One',
//    date: 'Feb 18 2018',
  //  content: ` <p>
    //                This is my first article. I would like to Tanmani Gopal the instructor for this wonderful opportunity.
      //          </p>
        //    <p>
         //       Great work.
          //      </p>    `
//},
//'article-two' : {
 //    title: 'Article Two | Murugan Mani',
   // heading: 'Article Two',
    //date: 'Feb 19 2018',
    //content: ` <p>
      //              This is my Second article. I would like to Tanmani Gopal the instructor for this wonderful opportunity.
        //        </p>
         //   <p>
           //     Great work.
            //    </p>    `
//}
//};
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
    ${date.toDateString()}
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

function hash(input, salt)
{
    //how to create a hash
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ['pbkdf2', 10000, salt, hashed.toString('hex')].join('$');
}


app.get('/hash/:input', function (req, res) {
    var hashedString = hash(req.params.input, 'this is some random string');
    res.send(hashedString);
    
});

app.post('/create-user', function(req, res) {
   //username, passwords
   //{"username": "murugan", "password": "password12"};
   //JSON
   var username = req.body.username;
   var password = req.body.password;
   
   var salt = crypto.getRandomBytes(128).toString('hex');
   var dbString = hash(password, salt);
   pool.query('INSERT INTO "userm" (username, password) VALUES ($1, $2)', [username, dbString], function(err, result) {
        if (err) {
            res.status(500).send(err.toString());
    }        else {
                res.send('user successfully create: ' + username);
            }
});
});

var Pool = new Pool(config);
app.get('/test-db', function (req, res) {
    //make a select request
    Pool.query('SELECT * FROM testm', function(err, result) {
        if (err) {
            res.status(500).send(err.toString());
    }        else {
                res.send(JSON.stringify(result.rows));
            }
       });
    });
    //return a response with a result

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
var names = [];
app.get('/submit-name', function (req, res) {  //URL: /submit-name?name=xxxx
    //Get the name from request object
    var name = req.query.name;
    
    names.push(name);
    //JSON: Java Script Object Notatiom
    res.send(JSON.stringify(names)); //1000
});

app.get('/articles/:articleName', function (req, res){
    //articleName = article-one
    //articles[articleName] = {} content object for article one
    
    Pool.query("SELECT * FROM articlem WHERE title = $1", [req.params.articleName], function(err, result) {
      if (err) {
            res.status(500).send(err.toString());
    }        else {
                if (result.rows.length === 0){
                    res.status(404).send('Article not found');
                } else
                {
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
               }
    }
    });
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
