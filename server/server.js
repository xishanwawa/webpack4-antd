/**
 * Created by ***
 */
var express = require("express");
var app = express();

var session = require("express-session");
var cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
  })
);

// app.use(function(req, res) {
//   res.send(`<html>
//   <head>
//     <title>Getting Started</title>
//     <script src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/lib/jquery-1.10.2_1c4228b8.js"></script>
//     <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
//     <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
//     <script src="//cdn.bootcss.com/immutable/3.8.1/immutable.min.js"></script>
//     <script src="http://localhost:3001/loadScript.js"></script>
//   </head>
//   <body>
//     <div id="root"></div>
//   </body>
//   </html>`);
// });

app.get("/api/islogin", function(req, res) {
  if (req.session.login == "1") {
    res.send(`{"ok":"欢迎${req.session.username}"}`);
  } else {
    res.send('{"ok":"没有登录"}');
  }
});

app.get("/api/login", function(req, res) {
  if (req.session.login == "1") {
    res.send('{"ok":"已登录，不要重复登录"}');
  } else {
    req.session.login = "1"; //设置这个session
    req.session.username = "ytm";
    res.cookie("username", "ytm", { maxAge: 900000, httpOnly: true });
    res.send('{"ok":"成功登录"}');
  }
});

app.get("/api/logout", function(req, res) {
  if (req.session.login) {
    delete req.session.login;
    delete req.session.username;

    res.clearCookie("username");
    res.send('{"ok":"成功登出"}');
  } else {
    res.send('{"ok":"已登出, 不要重复登出"}');
  }
});

var server = app.listen(8007, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为:" + port);
});
