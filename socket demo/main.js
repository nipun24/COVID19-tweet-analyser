var http = require('http'),
    fs = require('fs'),
    // NEVER use a Sync function except at start-up!
    index = fs.readFileSync(__dirname + '/index.html');

// Send index.html to all requests
var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

// Socket.io server listens to our app
var io = require('socket.io').listen(app);

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./twitter.db');

// Send current time to all connected clients
function sendTime() {
    let sql = 'SELECT * FROM sentiment';
    var positive = 0;
    var negative = 0;
    var neutral = 0;
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
          var sentiment = row.sentiment
        //   var new_val = 0
          if (sentiment>=0.2){
            positive++
          }
          else if (sentiment <= -0.2){
            negative++
          }
          else {
            neutral++
          }
        });
        io.emit('time',"positive ->" + String(positive) + " negative ->" + String(negative) + " neutral ->" +String(neutral));
      });
}

setInterval(sendTime, 10000);

app.listen(3000);