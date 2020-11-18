var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', 
                  contents:'restful api서버를 만들어보자' });
  //첫번째 매개변수 ejs파일- index.ejs 
  //두번째 매개변수 ejs파일에 보내는 데이터 
  //데이터는 JSON 형태로 {키:"값"} 
});

module.exports = router;
