const fetchDataOps = require("../controllers/fetchDataOps");

module.exports = (app) => {
  app.post("/fetchData", fetchDataOps.fetchData);
};
