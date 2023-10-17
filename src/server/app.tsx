import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack App!</title>
  </head>
  <body>
    <div id="root">Hello World!!</div>
    <script src="https://${process.env.CODESPACE_NAME}-8080.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}/index.js"></script>
  </body>
</html>`);
});

export default app;
