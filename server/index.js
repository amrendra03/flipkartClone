import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';


import Connection from './database/db.js';

import DefaultData from './default.js';

import router from './routes/route.js';

const app = express();
dotenv.config();


const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-mw3vitf-shard-00-00.pd3yywt.mongodb.net:27017,ac-mw3vitf-shard-00-01.pd3yywt.mongodb.net:27017,ac-mw3vitf-shard-00-02.pd3yywt.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-in447a-shard-0&authSource=admin&retryWrites=true&w=majority`;


Connection(URL);

app.listen(PORT, () => console.log('Server is running successfully on port ' + PORT));
DefaultData();


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);








