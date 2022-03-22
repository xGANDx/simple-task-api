import model from './model';

const create = (newTask = {
    name: "Exemplo",
    check: false,
    removed: false,
}) => {
    return model.create(newTask);
}

const all = () => {
    return model.find();
}

const remove = async (id = "") => {
    let task = await model.findById(id);

    task.removed = true;

    return task.save();
}

const update = async (updateTask = {
    id: "1",
    name: "Exemplo",
    check: false,
    removed: false,
}) => {
    let task = await model.findById(updateTask.id);

    task.name = updateTask.name;
    task.check = updateTask.check;

    return task.save();
}

export default {
    all,
    create,
    update,
    remove,
}