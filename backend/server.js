const app = require("./app");
const connection = require("./database");
connection();
app.listen(4000, () => {
  console.log("Server is  Running on http//:localhost:4000");
});
