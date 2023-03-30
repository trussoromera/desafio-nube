import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

// GET
app.get('/', (req, res, next) =>{
    res.send('Escuchando con Railway...')
})
app.get('/env', (req, res, next) => {
    res.send(`Solicitando el entorno: ${process.env.VICIOUS_COFFEE}`)
})

app.get('/user',(req,res)=>{
    if(process.env.ENVIRONMENT === "PRODUCTION"){
        res.send(`OBTENIENDO USUARIOS DE LA BASE DE DATOS PROOOODUCTIVAA`)
    }
    else{
        res.send(`OBTENIENDO USUARIOS DE LA BASE DE DATOS DE PRUEBA: ${process.env.TESTDB}`)
    }
})
app.get('/get-out', (req, res, next) => {
    res.send('Dejando de escuchar con Railway...')

})

// LISTEN
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
