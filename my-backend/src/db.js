import { MongoClient} from 'mongodb';

let db;

async function connectDb(cb) {
    // Conexión a MongoDB
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    // Especificar base de datos y buscar el artículo por nombre
    db = client.db('react-blog-db');
    cb();
}

export {db,connectDb};