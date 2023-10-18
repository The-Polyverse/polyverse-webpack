import React from "react";

export default function Document() {
  return (
    <html>
      <head>
        <title>Webpack App</title>
      </head>
      <body>
        <div id="root">Hello World!!</div>
        <script src="https://${
            process.env.CODESPACE_NAME
          }-8080.${
            process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
          }/index.js"/>
      </body>
    </html>
  );
}
