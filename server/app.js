/**
 * Created by ycy42 on 2017/6/15.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(__dirname);
});
app.get('/name', function (req, res) {
  res.send('ycy');
});
app.use(express.static('../../dist'));
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
