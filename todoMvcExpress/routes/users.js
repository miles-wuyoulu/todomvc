var express = require('express');
var router = express.Router();
var model = require("../model")

// 判断cookie是否保存账户信息，免登录
router.post('/judglogin', function (req, res, next) {
  console.log(!req.cookies.user)
   if(!req.cookies.user)return
   let user = req.cookies.user
   let password = req.cookies.password
  model.connect(async function (db) {
    let findResult = await db.collection('users').find({user}).toArray();
    let ifPass = false;
    if (findResult.length != 0) {
      ifPass = findResult[0].password == password ? true : false;
    }
    res.send(ifPass)
    console.log('Found documents =>', findResult);
  })
});

/* 用户登录 */
router.post('/login', function (req, res, next) {
  console.log(req.cookies.user)
  model.connect(async function (db) {
    console.log(req.body)
    let findResult = await db.collection('users').find({ user: req.body.user }).toArray();
    let ifPass = false;
    if (findResult.length != 0) {
      ifPass = findResult[0].password == req.body.password ? true : false;
    }
    if(ifPass){
      res.cookie('user', req.body.user, { maxAge: 900000 });
      res.cookie('password', req.body.password, { maxAge: 900000 });
      // res.cookie('userimg', "123456", { maxAge: 900000 });
    }
    res.send(ifPass)
  
    console.log('Found documents =>', findResult);
  })
});

//   用户注册
router.post('/register', (req, res, next) => {
  console.log(req.body)
  model.connect(async function (db) {
    let findResult = await db.collection('users').find({ user: req.body.user }).toArray();
    let isExit = findResult.findIndex(v=>v.user == req.body.user)
      // let insertResult = await db.collection('users').insertOne(req.body);
        console.log(isExit)
        if(isExit == -1){
        // 用户不存在
         let insertResult = await db.collection('users').insertOne(req.body);
         res.send(true)
        }else{
         // 用户存在
         res.send(false)
        }
      // console.log('Found documents =>', insertResult);
  })
})

module.exports = router;
