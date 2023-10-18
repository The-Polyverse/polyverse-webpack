import express from "express";
import { renderToString } from "react-dom/server";
import { createElement } from 'react';

import Document from '../components/document';

const app = express();

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>` + renderToString(createElement(Document)));
});

export default app;
