var express = require("express");
var cors = require("cors");

var app = express();

const corsOptions = {
  origin: "*",
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  preflightContinue: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Server works!");
});

var routes = require("./routes/routes");
routes(app);

app.listen(4000, () => {
  console.log("Server is listening on port 4000.");
});
