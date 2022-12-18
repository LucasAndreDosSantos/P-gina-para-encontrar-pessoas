const express = require('express');
var router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId;

//reference for the scheme
var { PostagemReencontro } = require('../models/postagemReencontroModel')

// initial route
router.get("/", (req, res) => {
    res.send("Welcome to the application.");
});

//save record
router.post('/postagemreencontros/', (req, res) => {
    var newRecord = new PostagemReencontro({
        titulo: req.body.titulo,
        data: req.body.data,
        autor: req.body.autor,
        categoria: req.body.categoria,
        descricao: req.body.descricao,
        foto: req.body.foto,
        contatos: req.body.contatos,
    })


    newRecord.save((err, doc) => {
        if (!err) res.send(doc)
        else console.log('Error while creating new record: ' + JSON.stringify(err, undefined, 2))
        console.log('´Post realizado');
    })
})

//get all records
router.get('/postagemreencontros/', (req, res) => {
    PostagemReencontro.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving all records: ' + JSON.stringify(err, undefined, 2))
    })
})

//update record
router.put('/postagemreencontros/:id', (req, res) => {
    //Verify the id
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id: ' + req.params.id)

    var updatedRecord = {
        titulo: req.body.titulo,
        foto: req.body.foto,
        descricao: req.body.descricao,
        contatos: req.body.contatos,
        categoria: req.body.categoria,
        data: req.body.data,
    }

    PostagemReencontro.findByIdAndUpdate(req.params.id, { $set: updatedRecord }, { new: true }, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while updating a record: ' + JSON.stringify(err, undefined, 2))
        console.log('Put realizado');
    })
})

//delete object
router.delete('/postagemreencontros/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id: ' + req.params.id)

    PostagemReencontro.findByIdAndDelete(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while deleting a record: ' + JSON.stringify(err, undefined, 2))
        console.log('Delete realizado');
    })
})

module.exports = router;