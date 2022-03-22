"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _model = require('./model'); var _model2 = _interopRequireDefault(_model);

const create = (newTask = {
    name: "Exemplo",
    check: false,
    removed: false,
}) => {
    return _model2.default.create(newTask);
}

const all = () => {
    return _model2.default.find({
        removed: false
    });
}

const remove = async (id = "") => {
    let task = await _model2.default.findById(id);

    task.removed = true;

    return task.save();
}

const update = async (updateTask = {
    id: "1",
    name: "Exemplo",
    check: false,
    removed: false,
}) => {
    let task = await _model2.default.findById(updateTask.id);

    task.name = updateTask.name;
    task.check = updateTask.check;

    return task.save();
}

exports. default = {
    all,
    create,
    update,
    remove,
}