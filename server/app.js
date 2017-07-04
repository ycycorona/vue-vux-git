/**
 * Created by ycy42 on 2017/6/15.
 */
var express = require('express');
var ejs = require('ejs');
var path = require('path');
var app = express();
var user = require('./control/user');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/*console.log(app.settings.view());*/
app.engine('.html', ejs.__express);
app.set('view engine', 'html');// app.set('view engine', 'ejs');

app.locals.title = 'vue-test-project';
/*app.set('view engine', 'html');*/
app.use(express.static('public'));
app.use(express.static('views'));

app.use(function(req, res, next) {
  console.log("12");
  next();
});

app.use('/user',user);

/*app.get('/', function (req, res) {
  res.sendfile('/index.html');
});*/





app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



