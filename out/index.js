"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);
const app = _express2.default.call(void 0, );
app.use(_bodyparser2.default.json())
app.use(_cors2.default.call(void 0, ))

var _controller = require('./domains/task/controller'); var _controller2 = _interopRequireDefault(_controller);

_mongoose2.default.connect('mongodb+srv://api:ZzuzSM60ub0LkH9W@simple-task.obgny.mongodb.net/simple-task');

app.use('/task', _controller2.default);

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Run -> ${port}`)
})