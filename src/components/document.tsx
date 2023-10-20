import React from "react";
import HelloWorld from "./hello-world";

export default function Document() {
  return (
    <html>
      <head>
        <title>Webpack App</title>
      </head>
      <body>
        <div id="root"><HelloWorld/></div>
        <script src={`https://${
            process.env.CODESPACE_NAME
          }-8080.${
            process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
          }/index.js`}/>
      </body>
    </html>
  );
}
