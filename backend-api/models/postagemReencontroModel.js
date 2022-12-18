const mongoose = require('mongoose');

//defining db structure -> create a collection
var postagemreencontros = mongoose.model('postagemreencontros', {
    titulo: { type: String },
    data: { type: String },
    autor:{ type: String },
    categoria: { type: String },
    descricao: { type: String },
    foto: { type: String },
    contatos: { type: String },
    
})

module.exports = { PostagemReencontro: postagemreencontros }