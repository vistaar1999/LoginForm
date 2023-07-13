const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "./Login")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./Login/index.html"));
});

app.post("/register", async (req, res) => {
  res.send(
    "<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>"
  );
});

server.listen(3000, function () {
  console.log("server is listening on port: 3000");
});
