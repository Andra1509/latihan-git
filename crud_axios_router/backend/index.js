const express = require("express");
const cors = require("cors");
const { moviesRouter } = require("./src/router/movieRouter");
const userRouter = require("./src/router/userRouter");
const app = express();
const port = 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");
const categoryRouter = require("../../crud_axios/backend/src/router/categoryRouter");

var corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", moviesRouter);
app.use("/", userRouter);
app.use("/api", categoryRouter);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
