var express = require('express');
var router = express.Router();


var model = require("../model")

router.get('/', function (req, res, next) {
  
    model.connect(async function(db){
      let findResult = await db.collection('todos').find({user:req.cookies.user}).toArray();
      // console.log('Found documents =>', findResult);
      res.send(JSON.stringify(findResult))
    })
  });

//   添加事项
router.post('/add', (req, res, next) => {
    console.log(req.body)
    model.connect(async function (db) {
        // let findResult = await db.collection('todos').find({}).toArray();
        let insertResult = await db.collection('todos').insertOne(req.body);
          let updateResult = await db.collection('todos').updateOne({ id: req.body.id }, { $set: { user: req.cookies.user } });
        console.log('Found documents =>', insertResult,updateResult);
    })
})

// 选中或取消
// const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
// console.log('Updated documents =>', updateResult);

router.post('/check', (req, res, next) => {
    console.log(req.body)
    model.connect(async function (db) {
        let updateResult = await db.collection('todos').updateOne({ id: req.body.id ,user:req.cookies.user}, { $set: { done: req.body.done } });
        console.log('Found documents =>', updateResult);
    })
})


// 双击编辑
router.post('/edit', (req, res, next) => {
    console.log(req.body)
    model.connect(async function (db) {
        let updateResult = await db.collection('todos').updateOne({ id: req.body.id ,user:req.cookies.user}, { $set: { title: req.body.title } });
        console.log('Found documents =>', updateResult);
    })
})

//删除一个
router.post('/delete', (req, res, next) => {
    console.log(req.body)
    model.connect(async function (db) {
        let deleteResult = await db.collection('todos').deleteOne({ id: req.body.id ,user:req.cookies.user});
        console.log('Deleted documents =>', deleteResult);
    })
})

//清除已经完成列表
router.post('/clear', (req, res, next) => {
    console.log(req.body)
    model.connect(async function (db) {
        let deleteResult = await db.collection('todos').deleteMany({ done: true ,user:req.cookies.user});
        console.log('Deleted documents =>', deleteResult);
    })
})

//全选或者取消全选

router.post('/choose', (req, res, next) => {
    console.log(req.body)
    model.connect(async function (db) {
        let updateResult = await db.collection('todos').updateMany({ user:req.cookies.user }, { $set: { done: !req.body.done } });
        console.log('Found documents =>', updateResult);
    })
})










// model.connect(async function(db){
//     let findResult = await db.collection('todos').find({}).toArray();
//     console.log('Found documents =>', findResult);
//   })

module.exports = router;