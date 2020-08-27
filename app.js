var express = require("express");
var app = express();
app.use(express.static("pages"));
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/pages/404.html");
});
app.listen(8080);
