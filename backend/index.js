const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const mainRouter = require("./routers/index");

app.use("/app/v1", mainRouter);

app.listen(3000);
