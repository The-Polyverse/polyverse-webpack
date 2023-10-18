import express from "express";
import { renderToString } from "react-dom/server";
import { createElement } from 'react';

const app = express();

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>` + );
});

export default app;
