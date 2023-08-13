import express from "express";
import { dirname } from 'path'

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(` server listening on ${port}`);
});
