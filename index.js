const express = require("express");
const app = express();

const db = require("./db");

// routes
const userRoutes = require("./routes/userRoutes");
const folderRoutes = require("./routes/folderRoutes");
const pictureRoutes = require("./routes/pictureRoutes");

// middleware
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

// config routes
app.use("/user", userRoutes);
app.use("/folder", folderRoutes);
app.use("/picture", pictureRoutes);

db
    //.sync({force: true})
    .sync()
    .then(() => {
        app.listen(4000);
    })
    .catch((error) => {
        console.log(error);
    })
