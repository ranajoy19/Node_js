import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to node server</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/ranajoy", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/ranajoy", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/ranajoy", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`server listening on ${port} port`);
});
