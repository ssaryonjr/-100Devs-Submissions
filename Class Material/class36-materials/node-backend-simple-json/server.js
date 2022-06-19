const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  function loadData(page, contentType){
    fs.readFile(page, function(err, data) {
      res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
      res.end();
    });
  }

switch(page){
    case '/':
          loadData('index.html','text/html')
          break

    case '/otherpage':
      loadData('otherpage.html','text/html')
          break

    case '/otherotherpage':
      loadData('otherotherpage.html','text/html')
          break

    case '/api':
      class Student{
        constructor (name, status, currentOccupation){
          this.name = name;
          this.status = status;
          this.currentOccupation = currentOccupation;
        }
      }
      
      if(params['student']== 'leon'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const leon = new Student('leon','Boss Man', 'Baller')
          res.end(JSON.stringify(leon));
        }//student = leon
      else{
          res.writeHead(200, {'Content-Type': 'application/json'});
          const unknown = new Student('unknown','unknown', 'unknown')
          res.end(JSON.stringify(unknown));
        }//default
          break
    case '/css/style.css':
        fs.readFile('css/style.css', function(err, data) {
            res.write(data);
            res.end();
          });
          break

    case '/js/main.js':
          loadData('js/main.js','text/javascript')
          break

    default: 
    figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
      });   
      break
}
});

server.listen(8000);
