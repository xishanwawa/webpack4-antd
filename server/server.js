/**
 * Created by ***
 */
var express = require("express");
var app = express();

app.use(function(req, res) {
  res.send(`<html>
  <head>
    <title>Getting Started</title>
    <script src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/lib/jquery-1.10.2_1c4228b8.js"></script>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="//cdn.bootcss.com/immutable/3.8.1/immutable.min.js"></script>
    <script src="http://localhost:3001/loadScript.js"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
  </html>`);
});

// app.use(function(req, res) {
//   res.send('{"ok":"ok"}');
// });

var server = app.listen(8007, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://10.1.230.0:" + port);
});
