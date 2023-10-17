import express from "express";
import app from "./app";

console.log("Hello World!");

const server = express();
let handler: any = app;

server.use((req, res) => {
  handler.handle(req, res);
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});

if (module.hot) {
  console.log("✅  Server-side HMR Enabled!");
  
  module.hot.accept("./app", async () => {
    console.log("🔁  HMR Reloading `./app`...");
    try {
      handler = await import("./app").then((mod) => mod.default);
    } catch (error) {
      console.error(error);
    }
  });
}
