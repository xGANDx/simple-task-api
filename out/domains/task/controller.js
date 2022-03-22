"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _service = require('./service'); var _service2 = _interopRequireDefault(_service);

var router = _express2.default.Router();

router.get('/all', async function (req, res) {
    let result = await _service2.default.all();

    res.json(result);
});

router.post('/', async function (req, res) {
    const {
        name,
        check,
        removed,
    } = req.body;

    let result = await _service2.default.create({
        name,
        check,
        removed
    });

    res.json(result);
});

router.put('/:id', async function (req, res) {
    const {
        name,
        check,
        removed,
    } = req.body;
    const {
        id,
    } = req.params;

    let result = await _service2.default.update({
        id,
        name,
        check,
        removed
    });

    res.json(result);
});

router.delete('/:id', async function (req, res) {
    const {
        id,
    } = req.params;

    let result = await _service2.default.remove(id);

    res.json(result);
});

exports. default = router;