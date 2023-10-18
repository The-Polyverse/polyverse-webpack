import express from "express";
import { renderToString } from "react-dom/server";
import { createElement } from 'react';

import Document from '../components/Document';

const app = express();

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>` + createElement(Document));
});

export default app;
