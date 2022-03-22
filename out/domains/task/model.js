"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const taskSchema = new _mongoose2.default.Schema({
    name: {
        type: String
    },
    check: {
        type: Boolean,
        default: false
    },
    removed: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

exports. default = _mongoose2.default.model('Task', taskSchema);
