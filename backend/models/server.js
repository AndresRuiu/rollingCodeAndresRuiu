const express = require('express');
var cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = 8081 || process.env.PORT;
        this.usuarios_path = "/api/users";
        this.products_path = "/api/products";
        this.auth_path = "/api/auth";
        this.middleware();
        this.routes();
    }
    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static("public"));
    }
    routes(){
        this.app.use(this.usuarios_path,require('../routes/usuarios'));
        this.app.use(this.usuarios_path,require('../routes/usuarios'));
        this.app.use(this.usuarios_path,require('../routes/auth'));
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Se esta ejecutando el puerto ${this.port}`);
        })
    }
}

module.exports = Server