const mongoose = require('mongoose');

const UserSchema = {

    usuario: String,
    senha: String,
    telefone: String,
    assinatura: String,
    assinatura2: String,
    senha4: String,
    email: String,
    tipo: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    criado: {
        type: Date,
        default: Date.now()
    }
}

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel