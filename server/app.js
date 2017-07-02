/**
 * Created by ycy42 on 2017/6/15.
 */
let express = require('../node_modules/express');
let ejs = require('../node_modules/ejs');
let path = require('path');
let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/*console.log(app.settings.view());*/
app.engine('.html', ejs.__express);
app.set('view engine', 'html');// app.set('view engine', 'ejs');

app.locals.title = 'vue-test-project';
/*app.set('view engine', 'html');*/
app.use(express.static('public'));
/*app.use(express.static('views'));*/

app.use(function(err,req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
  next(err);
});
app.use(function(req, res, next) {
  console.log("12");
  next();
});
app.use(function(req, res, next) {
  console.log("34");
});
/*app.use(function (req, res, next) {
  console.log('Time: %d', Date.now());
  next();
});*/

/*app.get('/', function (req, res) {
  res.sendfile('index.html');
});*/

//静态资源目录

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



