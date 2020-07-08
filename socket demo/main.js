const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./twitter.db');

// Send current time to all connected clients
const sendTime = () => {
    let sql = 'SELECT * FROM sentiment';
    var obj = [{id:'positive',label:'positive',value:0},
              {id:'negative',label:'negative',value:0},
              {id:'neutral',label:'neutral',value:0}]
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
          var sentiment = row.sentiment;
          if (sentiment>=0.2){
            obj[0].value++;
          }
          else if (sentiment <= -0.2){
            obj[1].value++;
          }
          else {
            obj[2].value++;
          }
        });
        io.emit('time',obj);
        // console.log(obj);
      });
}

setInterval(sendTime, 10000);

server.listen(3000);