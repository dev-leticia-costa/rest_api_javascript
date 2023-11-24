const express = require('express');
const app = express();

app.use((req, res,next) => {
    res.status(200).send({
        mensagem: "Ok! Deu certo, status 200 :)"
    });
});
module.exports = app;