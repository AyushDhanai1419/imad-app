var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
'article-one' : {
    title: 'Article One | Ayush Dhanai',
    heading: 'Article One',
    date: '15 Sep',
    content: ` <p>This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.</p>
        
        <p>This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.</p>
        
        <p>This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.This is the content if Article one.</p>
        `
        },
'article-two' : {
            title: 'Article Two | Ayush Dhanai',
    heading: 'Article Two',
    date: '10 Sep',
    content: ` <p>This is the content if Article Two.This is the content if Article Two.</p>
        `
        },
        
'article-three' : {
            title: 'Article Three | Ayush Dhanai',
    heading: 'Article Three',
    date: '20 Sep',
    content: ` <p>This is the content of Article Three.</p>
        `
        }
};
function createTemplate (data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`
    <html>
   <head> 
      <title>
       ${title}
      </title>
      <meta name="viewport" content="width-device-width, initial-scale-1"/>
              <link href="/ui/style.css" rel="stylesheet" />

      
    </head>
    <body>
        <div class="container">
        <div><a href="/">HOME</a>
        </div> 
        <div class="center">
            <h1><u>${heading}</u></h1>
        </div>
        <div>
            <h1><u>${date}</u></h1>
        </div>
        <div>
       ${content}
        </div> 
         </div> 
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
        
        app.get('/:articleName',function (req, res){
            var articleName = req.params.articleName;
          res.send(createTemplate(articles[articleName]));
        });
        
        var names = [];
        app.get('/submit-name/:name',function (req, res){
            var name = req.param.name;
            names.push(name);
            res.send(JSON.stringify(names));
        });
        
        var counter = 0;
        app.get('/ui/counter',function (req, res) {
            counter = counter + 1;
            res.send(counter.toString());
        });
        
        // Do not change port, otherwise your app won't run on IMAD servers
        // Use 8080 only for local development if you already have apache running on 80
        
        var port = 80;
        app.listen(port, function () {
          console.log(`IMAD course app listening on port ${port}!`);
        });
