import multer from "multer";
const upload = new multer();
import express from "express";
import bodyParser from 'body-parser';
import { Blog } from "./src/entity/blog";
import { AppDataSource } from "./src/data-source";
import router from "./src/controller/router";
const PORT = 8080;

AppDataSource.initialize().then(() => { console.log("Data Source has been initialized!") }).catch(err => { console.error("Error during Data Source initialization:", err) });

const app = express();

app.set('view engine', 'ejs');
app.set('views', "./src/views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(router);

app.listen(PORT);
