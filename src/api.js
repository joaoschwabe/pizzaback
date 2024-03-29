require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.header('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/** ---------ROTAS------*/
const router = express.Router();

const route = require("./routers/route");
const pizzaRoute = require("./routers/pizzaRoutes");

app.use("/", route);
app.use("/pizza", pizzaRoute);

module.exports = app;
