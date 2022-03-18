/* ODM: Permite modelar datos de mongo, para utilizarlos en la app con una interfaz sencilla */
import mongoose from 'mongoose'

const host = 'mongodb://127.0.0.1:27017/films'

mongoose.set("debug",true);
mongoose.Promise = global.Promise

const conn = mongoose.createConnection(
    host,
    {
        maxPoolSize: 200
    }
)

conn.on("error", err => {
     console.log("Error: "+err)
     return process.exit()
})

conn.on("connected", err => {
    console.log("Conectado a mongo")
})

const filmSchema = new mongoose.Schema(
    {
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, trim:true, required: true},
    poster: {type: String, trim:true, required: true}
    },
    {
        strict: false
    }
)

const Film = conn.model("Film", filmSchema)


const newDocument = new Film({
    _id: new mongoose.Types.ObjectId(),
    title: 'Cars',
    poster: 'Rayo'
})

newDocument.save(err => {
    if(err){
        throw err
    }

    console.log("Almacenado")
})