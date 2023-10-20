import React from "react";
import { createRoot } from "react-dom/client";

console.log("Hello World!");

// Render your React component instead
const root = createRoot(document.getElementById("root")!);
root.render(<>Hello, World!!</>);
