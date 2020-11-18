//1.외부 모듈을 불러온다 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

//사용자가 만드는 모듈 : 현재폴더아래에 routes가 있고 
//그 폴더아래에 index.js가 있다. 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var guestbookRouter = require('./routes/guestbook');
const { normalize } = require('path');
//2. express객체 생성 - 웹서버 
var app = express();

app.use(cors({origin:true, credentials:true}));

//3.웹서버의 환경설정, html + data 연결작업해줄 엔진 
// view engine setup -- ejs(대부분 이거씀), jade 엔진(거의 사용불가)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//port번호 9000으로 변경 


//4.다양한 미들웨어들을 사용하겠다 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// http://127.0.0.1:3000/user
//5.라우터 : url 이 오면 그 url누가 처리할지 지정하는걸 
//          이걸 라우터라 한다 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/guestbook', guestbookRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
