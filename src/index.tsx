import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

console.log("Hello World!");

// Render your React component instead
const root = createRoot(document.getElementById("root")!);
root.render(<div className="text-3xl font-bold underline">Hello, World!!</div>);
