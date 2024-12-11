const express = require("express");
const app = express();
const port = 3000;
const { mainCall, getVal } = require("./API/main.js");

app.get("/", mainCall);
app.get("/x/:id", getVal);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
