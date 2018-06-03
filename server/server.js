// server.js

// BASE SETUP
// =============================================================================

// 加载express
var express = require('express');        // call express
var app = express();                 // 获得express定义的app，app对象此时代表整个web应用
bodyParser = require('body-parser');
// 设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", '3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// 给app配置bodyParser中间件
// 通过如下配置再路由种处理request时，可以直接获得post请求的body部分
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;        // set our port

// API路由配置
// =============================================================================
var router = express.Router();              // 获得express router对象
// 用get动词访问 http://localhost:8080/api
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


// 注册路由
router.route('/login')

    // 创建一条bear (用 POST动词访问uri http://localhost:8080/api/bears)
    .get(function (req, res) {
        console.log(req.query);
        if (req.query.username === 'admin' || req.query.username === 'test'){
            res.json({ status: 200, msg: 'success!', data: [] });
        }else{
            res.json({ status: 201, msg: 'error!', data: [] });
        }
     
        });

// 所有的路由会加上“／api”前缀
app.use('/api', router);

// 启动server
// =============================================================================
//开始监听端口
app.listen(port);
console.log('Magic happens on port ' + port);