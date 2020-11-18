var express = require('express');
var router = express.Router();

data=[
    {id:0, title:'제목1', writer:'홍길동1', contents:'내용1'},
    {id:1, title:'제목2', writer:'홍길동2', contents:'내용2'},
    {id:2, title:'제목3', writer:'홍길동3', contents:'내용3'},
    {id:3, title:'제목4', writer:'홍길동4', contents:'내용4'},
    {id:4, title:'제목5', writer:'홍길동5', contents:'내용5'},
    {id:5, title:'제목6', writer:'홍길동6', contents:'내용6'},
    {id:6, title:'제목7', writer:'홍길동7', contents:'내용7'},
    {id:7, title:'제목8', writer:'홍길동8', contents:'내용8'},
    {id:8, title:'제목9', writer:'홍길동9', contents:'내용9'},
    {id:9, title:'제목10', writer:'홍길동10', contents:'내용10'}
    
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({data:data, count:data.length});
});

//http://127.0.0.1:3000/guestbook/insert?title=제목&contents=내용&writer=장길산
router.post('/insert', function(req, res, next) {
    var body = req.body; 
    console.log( body );
    var id = data.length;
    var title = body.title;
    var writer = body.writer;
    var contents = body.contents; 
    data.push( {id:id, title:title, contents:contents, 
            writer:writer}); 
    res.send({result:"ok"});
});

//http://127.0.0.1:3000/guestbook/view/1 

router.get('/view/:id', function(req, res, next) {
    var id = req.params.id;
    var temp = data[id];
    res.send(temp);
});

router.post('/update', function(req, res, next) {
    var body = req.body; 
    var id = body.id;
    data[id].title = body.title;
    data[id].writer = body.writer;
    data[id].contents = body.contents; 
    res.send({result:"ok"});
});

router.post('/delete/:id', function(req, res, next) {
    var id = req.params.id; 
    data.splice(id, 1);
    res.send({result:"ok"});
});
module.exports = router;
