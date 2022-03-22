import express from 'express';

import service from './service';

var router = express.Router();

router.get('/all', async function (req, res) {
    let result = await service.all();

    res.json(result);
});

router.post('/', async function (req, res) {
    const {
        name,
        check,
        removed,
    } = req.body;

    let result = await service.create({
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

    let result = await service.update({
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

    let result = await service.remove(id);

    res.json(result);
});

export default router;