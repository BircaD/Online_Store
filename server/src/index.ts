require('dotenv').config();
import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const sequelize = require ('./db');
const models = require('../models/models');
import router from '../routes/index';
import ErrorHandlingMiddleware from '../middleware/ErrorHandlingMiddleware';


const app: Application = express();
const port = parseInt(process.env.PORT ?? '3000', 10);
app.use(cors());
app.use(express.json());
app.use('/api', router);

//Error check
app.use(ErrorHandlingMiddleware);


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => console.log(`Server started on port ${port}`))
    } catch (e) {
        console.log(e)
    }
}

start();
/*app.get('/', (req: Request, res: Response) => {
    return res.send('hello world');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)});
*/
