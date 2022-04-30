var express = require('express');
var router = express.Router();


var model = require("../model")

//   添加事项
router.post('/add', (req, res, next) => {
    console.log(req.body)
    model.connect(async function (db) {
        // let findResult = await db.collection('todos').find({}).toArray();
        let insertResult = await db.collection('todos').insertOne(req.body);
        console.log('Found documents =>', insertResult);
    })
})

// 选中或取消
// const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
// console.log('Updated documents =>', updateResult);

router.post('/check', (req, res, next) => {
    console.log(req.body)
    model.connect(async function (db) {
        let updateResult = await db.collection('todos').updateOne({ id: req.body.id }, { $set: { done: req.body.done } });
        console.log('Found documents =>', updateResult);
    })
})


// 双击编辑
router.post('/edit', (req, res, next) => {
    console.log(req.body)
    model.connect(async function (db) {
        let updateResult = await db.collection('todos').updateOne({ id: req.body.id }, { $set: { title: req.body.title } });
        console.log('Found documents =>', updateResult);
    })
})

//删除一个
router.post('/delete', (req, res, next) => {
    console.log(req.body)
    model.connect(async function (db) {
        let deleteResult = await db.collection('todos').deleteOne({ id: req.body.id });
        console.log('Deleted documents =>', deleteResult);
    })
})

//清除已经完成列表
router.post('/clear', (req, res, next) => {
    console.log(req.body)
    model.connect(async function (db) {
        let deleteResult = await db.collection('todos').deleteMany({ done: true });
        console.log('Deleted documents =>', deleteResult);
    })
})

//全选或者取消全选

router.post('/choose', (req, res, next) => {
    console.log(req.body)
    model.connect(async function (db) {
        let updateResult = await db.collection('todos').updateMany({  }, { $set: { done: !req.body.done } });
        console.log('Found documents =>', updateResult);
    })
})










// model.connect(async function(db){
//     let findResult = await db.collection('todos').find({}).toArray();
//     console.log('Found documents =>', findResult);
//   })

module.exports = router;