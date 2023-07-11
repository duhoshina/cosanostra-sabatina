import app from "./server";
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const mongooseOptions: mongoose.ConnectOptions = {
    dbName: 'database-test',
    autoIndex: false,
};

const main = async(): Promise<void> => {

    app.listen(process.env.PORT, () => {
        console.log(`Servidor iniciado em http://${process.env.HOST}:${process.env.PORT}`);
    });

    await mongoose.connect(`${process.env.URL_CONNECT}`, mongooseOptions)
        .then(() => {
            console.log('Conectado ao MongoDB!');
        })
        .catch((error) => {
            console.log(`Erro ao se conectar ao MongoDB: ${error}`);
        });
}

main();
