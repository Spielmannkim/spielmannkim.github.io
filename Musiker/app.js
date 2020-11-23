/*******************************/
/*           20.07.24          */
/*    실행 명령어 : npm start  */
/*******************************/


var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var ejs = require('ejs')

var app = express();

// 추가적인 html 또는 ejs 파일이 필요한 경우
// views 폴더 안에 생성
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('public'));

app.get('/', function(request, response){
   response.render('Musiker', // 왼쪽 New 의미 : views/New.ejs 파일
   // 서버에서 클라이언트 ejs 파일에 보내줄 데이터가 있으면
   // 아래와 같은 방식(객체)으로 전달
   // 실행 후, 값이 나오는지 Musiker.ejs 브라우저 화면에서 확인해 보세요^^
   {
      title : '서버에서 보내준 데이터를 클라이언트가 받는다'
    }
 );
});

app.get('/Search.ejs', function(request, response){
  // 서버에서 클라이언트에 보낼 데이터가 없는 경우
  // { 키 : 값 } 형식 생략 가능
  console.log("tttt");
   response.render('Search');
});

app.get('/New.ejs', function(request, response){
   response.render('New');
});

app.get('/Ranking.ejs', function(request, response){
   response.render('Ranking');
});

app.get('/Profile.ejs', function(request, response){
   response.render('Profile');
});

app.get('/Motive.ejs', function(request, response){
   response.render('Motive');
});

app.get('/Query.ejs', function(request, response){
   response.render('Query');
});



module.exports = app;
