var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send(JSON.stringify(todos))
});

router.post('/', (req, res, next) => {
  console.log(req.body)
  res.send('response111111')
  switch (req.body.type) {
    case "add": todos.unshift(req.body.todo);
      break;
    case "check": todos.forEach(e => {
      if (e.id === req.body.todo.id) {
        e.done = req.body.todo.done
        return
      }
    }); break;
    case "edit": todos.forEach(e => {
      if (e.id === req.body.todo.id) {
        e.title = req.body.todo.title
        return
      }
    }); break;
    case "delete": todos = todos.filter(v => v.id != req.body.todo);
      break;
    case "clearcomp": todos = todos.filter(v => !v.done);
      break;
      case "chooseall":todos.forEach(e=>e.done = !req.body.todo);break;
  }

})

var todos = []

module.exports = router;
